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
    };
};

export const responseFromUserSignup = (user) => {
    return {
        userId: user.id,
        name: user.name,
        email: user.email,
    };
};