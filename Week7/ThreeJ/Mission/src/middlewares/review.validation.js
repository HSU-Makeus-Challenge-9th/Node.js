import { 
    RequiredFieldError, 
    ValidationError,
    ResourceNotFoundError
} from '../res/error/custom-error.js';
import { prisma } from '../config/db.config.js';


// ---------------------------------------- middleware ----------------------------------------

// 리뷰 추가 검증 미들웨어
export const validateReviewAdd = async (req, res, next) => {
    try {
        const { userId, missionId, content, score } = req.body;

        // 필수 필드 검증
        if (!userId) throw new RequiredFieldError('userId');
        if (!missionId) throw new RequiredFieldError('missionId');
        if (!content) throw new RequiredFieldError('content');
        if (!score) throw new RequiredFieldError('score');

        // 형식 검증

        // score (0~5 범위)
        const scoreNum = parseFloat(score);
        if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 5) {
            throw new ValidationError('score', '평점은 0~5 사이의 숫자여야 합니다.');
        }

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

        next();
    } catch (error) {
        next(error);
    }
};

// 내가 작성한 리뷰 목록 조회 검증 미들웨어
export const validateGetMyReviews = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { page } = req.query;

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

