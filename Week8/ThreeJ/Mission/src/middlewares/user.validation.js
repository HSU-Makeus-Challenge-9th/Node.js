import { 
    RequiredFieldError, 
    ValidationError, 
    InvalidFormatError 
} from '../res/error/custom-error.js';
import { prisma } from '../config/db.config.js';

// 회원가입 검증 미들웨어
export const validateUserSignup = async (req, res, next) => {
    try {
        const { name, gender, birth, address, email, phone, role, preferences } = req.body;

        // 필수 필드 검증
        if (!name) throw new RequiredFieldError('name');
        if (!gender) throw new RequiredFieldError('gender');
        if (!birth) throw new RequiredFieldError('birth');
        if (!address) throw new RequiredFieldError('address');
        if (!email) throw new RequiredFieldError('email');
        if (!phone) throw new RequiredFieldError('phone');
        if (!role) throw new RequiredFieldError('role');

        // 형식 검증

        // gender
        const validGenders = ['MALE', 'FEMALE', 'NONE'];
        if (!validGenders.includes(gender)) {
            throw new ValidationError('gender', "'MALE', 'FEMALE', 'NONE' 중 하나를 입력해주세요.");
        }

        // birth
        validateBirth(birth);

        // email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new InvalidFormatError('email', 'example@domain.com');
        }

        // phone
        const phoneRegex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;
        if (!phoneRegex.test(phone)) {
            throw new InvalidFormatError('phone', '010-1234-5678');
        }

        // role
        const validRoles = ['USER', 'OWNER'];
        if (!validRoles.includes(role)) {
            throw new ValidationError('role', "'USER', 'OWNER' 중 하나를 입력해주세요.");
        }

        // preferences - 선택 필드
        if (preferences && preferences.length > 0) {
            await validatePreferences(preferences);
        }

        next();
    } catch (error) {
        next(error);
    }
};

// 생년월일 검증 함수
const validateBirth = (birth) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birth)) {
        throw new InvalidFormatError('birth', 'YYYY-MM-DD');
    }

    const birthDate = new Date(birth);
    const today = new Date();

    const [year, month, day] = birth.split('-').map(Number);
    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getDate() !== day
    ) {
        throw new ValidationError('birth', '존재하지 않는 날짜입니다.');
    }

    if (birthDate > today) {
        throw new ValidationError('birth', '생년월일은 현재 날짜보다 미래일 수 없습니다.');
    }

    if (year < 1800) {
        throw new ValidationError('birth', '유효하지 않은 출생 연도입니다.');
    }
};

// 선호 카테고리 검증 함수
const validatePreferences = async (preferences) => {
    // 배열인지 확인
    if (!Array.isArray(preferences)) {
        throw new ValidationError('preferences', 'preferences는 배열이어야 합니다.');
    }

    // 숫자 배열인지 확인
    const isAllNumbers = preferences.every(id => typeof id === 'number');
    if (!isAllNumbers) {
        throw new ValidationError('preferences', '카테고리 ID는 숫자여야 합니다.');
    }

    // DB에서 실제 존재하는 카테고리 ID 조회
    const categoryIds = preferences.map(id => BigInt(id));
    const existingCategories = await prisma.preferCategory.findMany({
        where: {
            id: { in: categoryIds }
        },
        select: { id: true }
    });

    // 존재하지 않는 ID 찾기
    const existingIds = existingCategories.map(category => BigInt(category.id));
    const invalidIds = preferences.filter(id => !existingIds.includes(BigInt(id)));

    if (invalidIds.length > 0) {
        throw new ValidationError(
            'preferences',
            `존재하지 않는 카테고리 ID입니다: ${invalidIds.join(', ')}`
        );
    }
};