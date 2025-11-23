import { 
    RequiredFieldError, 
    ValidationError,
    ResourceNotFoundError,
    DuplicateError,
    BadRequestError
} from '../res/error/custom-error.js';
import { prisma } from '../config/db.config.js';
import { checkUMExists } from '../repositories/mission.repository.js';


// 미션 종료일 검증 함수
const validateEndDate = (endDate) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(endDate)) {
        throw new InvalidFormatError('endDate', 'YYYY-MM-DD');
    }

    const endDateObj = new Date(endDate);
    const today = new Date();

    const [year, month, day] = endDate.split('-').map(Number);
    if (
        endDateObj.getFullYear() !== year ||
        endDateObj.getMonth() !== month - 1 ||
        endDateObj.getDate() !== day
    ) {
        throw new ValidationError('endDate', '존재하지 않는 날짜입니다.');
    }

    if (endDateObj < today) {
        throw new ValidationError('endDate', '미션 종료일은 오늘 이후여야 합니다.');
    }
};

// ---------------------------------------- middleware ----------------------------------------

// 미션 추가 검증 미들웨어
export const validateMissionAdd = async (req, res, next) => {
    try {
        const { endDate, money, points, storeId, regionId } = req.body;

        // 필수 필드 검증
        if (!endDate) throw new RequiredFieldError('endDate');
        if (!money) throw new RequiredFieldError('money');
        if (!points) throw new RequiredFieldError('points');
        if (!storeId) throw new RequiredFieldError('storeId');
        if (!regionId) throw new RequiredFieldError('regionId');

        // 형식 검증
        
        // endDate
        validateEndDate(endDate);

        // money (0 초과의 숫자)
        const moneyNum = parseInt(money);
        if (isNaN(moneyNum) || moneyNum <= 0) {
            throw new ValidationError('money', '금액은 0 초과의 숫자여야 합니다.');
        }

        // points (0 초과의 숫자)
        const pointsNum = parseInt(points);
        if (isNaN(pointsNum) || pointsNum <= 0) {
            throw new ValidationError('points', '포인트는 0 초과의 숫자여야 합니다.');
        }

        // 가게 존재 확인
        const store = await prisma.store.findUnique({
            where: { id: BigInt(storeId) }
        });
        if (!store) {
            throw new ResourceNotFoundError('가게');
        }

        // 지역 존재 확인
        const region = await prisma.region.findUnique({
            where: { id: BigInt(regionId) }
        });
        if (!region) {
            throw new ResourceNotFoundError('지역');
        }

        next();
    } catch (error) {
        next(error);
    }
};

// 미션 도전 검증 미들웨어
export const validateMissionChallenge = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const { missionId } = req.params;

        // 필수 필드 검증
        if (!userId) throw new RequiredFieldError('userId');
        if (!missionId) throw new RequiredFieldError('missionId');

        // 사용자 존재 확인
        const user = await prisma.user.findUnique({
            where: { id: BigInt(userId) }
        });
        if (!user) {
            throw new ResourceNotFoundError('사용자');
        }
        
        // 미션 존재 확인
        const mission = await prisma.mission.findUnique({
            where: { id: BigInt(missionId) }
        });
        if (!mission) {
            throw new ResourceNotFoundError('미션');
        }

        // 이미 도전 중인 미션인지 확인
        const isAlreadyChallenging = await checkUMExists(BigInt(userId), BigInt(missionId));
        if (isAlreadyChallenging) {
            throw new DuplicateError('missionId', '이미 도전 중인 미션입니다.');
        }

        next();
    } catch (error) {
        next(error);
    }
};

// 미션 완료 처리 검증 미들웨어
export const validateMissionComplete = async (req, res, next) => {
    try {
        const { userId, missionId } = req.params;

        // 필수 필드 검증
        if (!userId) throw new RequiredFieldError('userId');
        if (!missionId) throw new RequiredFieldError('missionId');

        // 사용자 존재 확인
        const user = await prisma.user.findUnique({
            where: { id: BigInt(userId) }
        });
        if (!user) {
            throw new ResourceNotFoundError('사용자');
        }

        // 미션 존재 확인
        const mission = await prisma.mission.findUnique({
            where: { id: BigInt(missionId) }
        });
        if (!mission) {
            throw new ResourceNotFoundError('미션');
        }

        // 사용자가 해당 미션을 도전 중인지 확인
        const userMission = await prisma.userMission.findFirst({
            where: {
                userId: BigInt(userId),
                missionId: BigInt(missionId)
            }
        });
        if (!userMission) {
            throw new ResourceNotFoundError('도전 중인 미션');
        }

        // 미션 상태가 CHALLENGING인지 확인
        if (userMission.status !== 'CHALLENGING') {
            if (userMission.status === 'COMPLETED') {
                throw new DuplicateError('status', "이미 완료된 미션입니다.");
            } else {
                throw new BadRequestError('status', "취소된 미션입니다.");
            }
        }

        next();
    } catch (error) {
        next(error);
    }
};

// 특정 가게의 미션 목록 조회 검증 미들웨어
export const validateGetStoreMissions = async (req, res, next) => {
    try {
        const { storeId } = req.params;
        const { cursor } = req.query;

        // 필수 필드 검증
        if (!storeId) throw new RequiredFieldError('storeId');

        // 쿼리 파라미터 검증 (선택적이지만, 값이 있다면 검증)
        if (cursor !== undefined) {
            const cursorNum = parseInt(cursor);
            if (isNaN(cursorNum) || cursorNum < 1) {
                throw new ValidationError('cursor', 'cursor는 1 이상의 숫자여야 합니다.');
            }
        }

        // 가게 존재 확인
        const store = await prisma.store.findUnique({
            where: { id: BigInt(storeId) }
        });
        if (!store) {
            throw new ResourceNotFoundError('가게');
        }

        next();
    } catch (error) {
        next(error);
    }
};

// 내 미션 목록 조회 검증 미들웨어
export const validateGetMyMissions = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { status, page } = req.query;

        // 필수 필드 검증
        if (!userId) throw new RequiredFieldError('userId');

        // 사용자 존재 확인
        const user = await prisma.user.findUnique({
            where: { id: BigInt(userId) }
        });
        if (!user) {
            throw new ResourceNotFoundError('사용자');
        }

        // 쿼리 파라미터 검증 (선택적이지만, 값이 있다면 검증)
        
        // status 검증 (CHALLENGING, COMPLETED, CANCELED)
        if (status !== undefined) {
            const validStatuses = ['CHALLENGING', 'COMPLETED', 'CANCELED'];
            if (!validStatuses.includes(status)) {
                throw new ValidationError('status', 'status는 CHALLENGING, COMPLETED, CANCELED 중 하나여야 합니다.');
            }
        }

        // page 검증
        if (page !== undefined) {
            const pageNum = parseInt(page);
            if (isNaN(pageNum) || pageNum < 1) {
                throw new ValidationError('page', 'page는 1 이상의 숫자여야 합니다.');
            }
        }

        next();
    } catch (error) {
        next(error);
    }
};