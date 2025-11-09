// 사용자 회원가입
export const bodyToUserSignup = (body) => {
    return {
        name: body.name,
        gender: body.gender,
        birth: new Date(body.birth),
        address: body.address,
        detailAddress: body.detailAddress || null,
        email: body.email,
        phone: body.phone,
        provider: body.provider,
        providerId: body.providerId,
        role: body.role || 'USER',
        preferences: body.preferences || [],
    };
};
export const responseFromUserSignup = (user) => {
    return {
        userId: Number(user.id), // BigInt를 Number로 변환
        name: user.name,
        email: user.email,
        role: user.role,
    };
};