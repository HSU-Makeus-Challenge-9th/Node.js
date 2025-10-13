import { responseFromUser } from "../dtos/user.dto.js";
import {
  addUser,
  getUser,
  getUserPreferencesByUserId,
  setAgreements,
  setPreferences,
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
  //사용자 추가
  const joinUserId = await addUser({
    name: data.name,
    gender: data.gender,
    birth: data.birth,
    address: data.address,
    password : data.password,
    email: data.email,
    phoneNumber: data.phoneNumber,
  });

  if (joinUserId === null) {
    throw new Error("이미 존재하는 이메일입니다.");
  }
  //이용 약관 동의 등록(필수)
  await setAgreements(joinUserId);
  //선호 카테고리 매핑 등록(선택)
  if(data.preferences && data.preferences.length >0){
    await setPreferences(joinUserId, data.preferences);
  }
  //등록된 유저 정보 조회 및 응답 변환
  const user= await getUser(joinUserId);
  const preferences=await getUserPreferencesByUserId(joinUserId)
  return responseFromUser({ user, preferences });
};