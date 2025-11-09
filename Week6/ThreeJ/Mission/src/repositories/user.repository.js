import { prisma } from "../config/db.config.js";

// 이메일 중복 검사
export const checkEmailExists = async (email) => {
    try {
        const existingEmail = await prisma.user.findUnique({
          where: { email },
        })

        return existingEmail !== null;
    } catch (err) {
        console.error(err);
        throw new Error("이메일 중복 확인 중 오류가 발생했습니다.");
    }
};

// ----------------------------------------------------------------------
// 사용자 정보 추가
const insertUser = async (tx, data) => {
  const user = await tx.user.create({
    data: {
      name: data.name,
      gender: data.gender,
      birth: data.birth,
      address: data.address,
      detailAddress: data.detailAddress,
      email: data.email,
      phone: data.phone,
      providerId: data.providerId,
      provider: data.provider,
      role: data.role,
      
      // 생략 가능(prisma에서 기본값 정의되어 있지만 명시적으로 작성)
      isPhoneVerified: false,
      points: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'ACTIVE',
      // nullable
      nickname: null, // 초기 회원가입 때 닉네임을 받지 않음
      inactiveDate: null,
    },
  });

  return user.id;
};
// 약관 동의 정보 추가
const insertTerms = async (tx, userId) => {
  await tx.terms.create({
    data: {
      // FK: 사용자
      userId: userId,
      
      // 필수 약관
      isOverFourteen: true,
      agreedToTermsOfService: true,
      agreedToPrivacyPolicy: true,
      // 선택 약관 - 일단 전부 동의한 것으로 가정
      agreedToLocationServices: true,
      agreedToMarketingEmails: true,
      
      // 생략 가능(prisma에서 기본값 정의되어 있지만 명시적으로 작성)
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
};
// 선호 카테고리 정보 추가
const insertUserPreferences = async (tx, userId, preferences) => {
  if (!preferences || preferences.length === 0) {
    return;
  }

  // Prisma의 createMany로 Bulk Insert
  // 예: [1, 5] -> [{ userId: 1, preferCategoryId: 1 }, { userId: 1, preferCategoryId: 5 }]
  await tx.userPrefer.createMany({
    data: preferences.map((categoryId) => ({
      userId: userId,
      preferCategoryId: categoryId,
    })),
  });
};
// User 추가
export const addUser = async (data) => {
  try {
    // 모든 작업이 하나의 트랜잭션으로 묶임
    const userId = await prisma.$transaction(async (tx) => {
      const userId = await insertUser(tx, data);
      await insertTerms(tx, userId);
      await insertUserPreferences(tx, userId, data.preferences);
      
      return userId;
    });
    
    return userId;
  } catch (err) {
    // 에러 발생 시 자동 롤백
    console.error(err);
    throw new Error("사용자 추가 중 오류가 발생했습니다.");
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 사용자 조회
export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    return user;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};
// ----------------------------------------------------------------------