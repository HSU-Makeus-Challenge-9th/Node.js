import { listUserInProgressMissions, completeMission } from "../services/user-missions.service.js";

// 진행 중인 미션 목록 조회
export const handleGetUserInProgressMissions = async (req, res, next) => {
   /*
    #swagger.summary = '내가 진행 중인 미션 목록 조회 API';
    #swagger.responses[200] = {
      description: "진행 중인 미션 목록 조회 성공 응답",
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
                        mission: { type: "object", properties: { id: { type: "number" }, point: { type: "number" }, region: { type: "string" } } },
                        store: { type: "object", properties: { id: { type: "number" }, name: { type: "string" }, address: { type: "string" } } },
                        status: { type: "string" },
                        startDate: { type: "string" },
                        endDate: { type: "string" },
                        createdAt: { type: "string" }
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
      description: "진행 중인 미션 목록 조회 실패 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "U002" },
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
    const userId = parseInt(req.params.userId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`사용자 ${userId}의 진행 중인 미션 목록 조회 요청`);

    const result = await listUserInProgressMissions(userId, cursor);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};

// 미션 완료 처리
export const handleCompleteMission = async (req, res, next) => {
   /*
    #swagger.summary = '진행 중인 미션을 완료로 변경 API';
    #swagger.responses[200] = {
      description: "미션 완료 처리 성공 응답",
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
                  id: { type: "number" },
                  mission: { type: "object", properties: { id: { type: "number" }, point: { type: "number" }, region: { type: "string" } } },
                  store: { type: "object", properties: { id: { type: "number" }, name: { type: "string" }, address: { type: "string" } } },
                  status: { type: "string" },
                  startDate: { type: "string" },
                  endDate: { type: "string" },
                  updatedAt: { type: "string" },
                  earnedPoint: { type: "number" }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "미션 완료 처리 실패 응답 (이미 완료된 미션)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "M003" },
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
    #swagger.responses[404] = {
      description: "미션 완료 처리 실패 응답 (사용자 또는 미션을 찾을 수 없음)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "U002" },
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
    const userId = parseInt(req.params.userId);
    const missionId = parseInt(req.params.missionId);

    console.log(`사용자 ${userId}의 미션 ${missionId} 완료 처리 요청`);

    const result = await completeMission(userId, missionId);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};

