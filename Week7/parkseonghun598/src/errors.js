// User 관련 에러 (U0XX)
export class DuplicateUserEmailError extends Error {
  errorCode = "U001";
  statusCode = 409; // Conflict

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class UserNotFoundError extends Error {
  errorCode = "U002";
  statusCode = 404; // Not Found

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

// Store 관련 에러 (S0XX)
export class StoreNotFoundError extends Error {
  errorCode = "S001";
  statusCode = 404;

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

// Mission 관련 에러 (M0XX)
export class MissionNotFoundError extends Error {
  errorCode = "M001";
  statusCode = 404;

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class MissionAlreadyChallengedException extends Error {
  errorCode = "M002";
  statusCode = 409; // Conflict

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class MissionAlreadyCompletedError extends Error {
  errorCode = "M003";
  statusCode = 400; // Bad Request

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

// Review 관련 에러 (R0XX)
export class ReviewNotFoundError extends Error {
  errorCode = "R001";
  statusCode = 404;

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}