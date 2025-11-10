import { responseFromUser } from "../dtos/user.dto.js";
import bcrypt from 'bcrypt';
import { prisma } from "../db.config.js";
import { DuplicateUserEmailError } from "../errors.js";
import {
  getUser,
  getUserPreferencesByUserId,
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
  // 비밀번호 해싱
  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    // Prisma Interactive Transaction 사용
    const joinUserId = await prisma.$transaction(async (tx) => {
      // 1. 이메일 중복 확인
      const existingUser = await tx.user.findUnique({
        where: { email: data.email }
      });

      if (existingUser) {
        throw new DuplicateUserEmailError("이미 존재하는 이메일입니다.", data);
            }

      // 2. 사용자 생성
      const user = await tx.user.create({
        data: {
          name: data.name,
          gender: data.gender,
          birth: data.birth,
          address: data.address,
          password: hashedPassword,
          email: data.email,
          phoneNumber: data.phoneNumber,
        }
      });

      // 3. 약관 동의 등록
      await tx.agreement.create({
        data: {
          userId: user.id,
          isServiceAgreed: true,
          isPersonalAgreed: true,
          isLocationAgreed: true,
          isAlramAgreed: true,
          ifFourteenAgreed: true,
        }
      });

      // 4. 선호 카테고리 매핑 등록 (선택)
      if (data.preferences && data.preferences.length > 0) {
        const preferenceData = data.preferences.map((categoryId) => ({
          userId: user.id,
          categoryId: categoryId,
        }));

        await tx.userPreference.createMany({
          data: preferenceData,
        });
      }

      return user.id; // 트랜잭션 성공 시 user.id 반환
    });

    // 5. 등록된 유저 정보 조회 및 응답 변환
    const user = await getUser(joinUserId);
    const preferences = await getUserPreferencesByUserId(joinUserId);
    
    return responseFromUser({ user, preferences });

  } catch (err) {
    // 트랜잭션 실패 시 자동 rollback
    throw new Error(`회원가입 실패: ${err.message}`);
  }
};