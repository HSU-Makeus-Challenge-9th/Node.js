import { listStoreMissions } from "../services/store-missions.service.js";

export const handleGetStoreMissions = async (req, res, next) => {
   /*
    #swagger.summary = '특정 가게의 미션 목록 조회 API';
    #swagger.responses[200] = {
      description: "가게 미션 목록 조회 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        store: { type: "object", properties: { id: { type: "number" }, name: { type: "string" }, address: { type: "string" } } },
                        point: { type: "number" },
                        startDate: { type: "string" },
                        endDate: { type: "string" },
                        region: { type: "string" }
                      }
                    }
                  },
                  pagination: { type: "object", properties: { cursor: { type: "number", nullable: true } }}
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[404] = {
      description: "가게 미션 목록 조회 실패 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "S001" },
                  reason: { type: "string" },
                  data: { type: "object" }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    };
  */
  try {
    const storeId = parseInt(req.params.storeId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`가게 ${storeId}의 미션 목록 조회 요청`);

    const result = await listStoreMissions(storeId, cursor);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};

