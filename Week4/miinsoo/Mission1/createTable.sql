CREATE TABLE `notification` (
	`id`	BIGINT	NOT NULL,
	`title`	VARCHAR(255)	NOT NULL,
	`body`	VARCHAR(255)	NOT NULL,
	`is_notification_read`	BOOLEAN	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`notification_type_id`	INT	NOT NULL,
	`user_id`	BIGINT	NOT NULL
);

CREATE TABLE `notification_settings` (
	`id`	BIGINT	NOT NULL,
	`is_agreed`	BOOLEAN	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`notification_type_id`	INT	NOT NULL,
	`user_id`	BIGINT	NOT NULL
);

CREATE TABLE `activated_mission` (
	`id`	BIGINT	NOT NULL,
	`state`	ENUM("진행중", "성공")	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`mission_id`	BIGINT	NOT NULL,
	`user_id`	BIGINT	NOT NULL
);

CREATE TABLE `review_comment` (
	`id`	BIGINT	NOT NULL,
	`text`	TEXT	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`review_id`	BIGINT	NOT NULL
);

CREATE TABLE `mission` (
	`id`	BIGINT	NOT NULL,
	`min_payment_amount`	INT	NOT NULL,
	`Reward points`	INT	NOT NULL,
	`dead_line`	DATE	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`store_id`	BIGINT	NOT NULL
);

CREATE TABLE `review` (
	`id`	BIGINT	NOT NULL,
	`rating`	DECIMAL	NOT NULL,
	`text`	TEXT	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`store_id`	BIGINT	NOT NULL,
	`user_id`	BIGINT	NOT NULL
);

CREATE TABLE `food_type` (
	`id`	INT	NOT NULL,
	`name`	VARCHAR(255)	NOT NULL
);

CREATE TABLE `store` (
	`id`	BIGINT	NOT NULL,
	`name`	VARCHAR(255)	NOT NULL,
	`address`	VARCHAR(255)	NOT NULL,
	`lat`	DECIMAL	NOT NULL,
	`lng`	DECIMAL	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`town_id`	INT	NOT NULL,
	`food_type_id`	INT	NOT NULL,
	`user_id`	BIGINT	NOT NULL
);

CREATE TABLE `store_img` (
	`id`	BIGINT	NOT NULL,
	`img_url`	VARCHAR(255)	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`store_id`	BIGINT	NOT NULL
);

CREATE TABLE `user` (
	`id`	BIGINT	NOT NULL,
	`name`	VARCHAR(255)	NOT NULL,
	`gender`	ENUM('남자', '여자', '선택안함')	NOT NULL,
	`birth_date`	DATE	NOT NULL,
	`high_address`	VARCHAR(255)	NOT NULL,
	`low_address`	VARCHAR(255)	NOT NULL,
	`user_point`	INT	NOT NULL,
	`is_business`	BOOLEAN	NOT NULL,
	`is_active`	BOOLEAN	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`email`	VARCHAR(255)	NOT NULL,
	`phone_number`	VARCHAR(255)	NULL
);

CREATE TABLE `review_img` (
	`id`	BIGINT	NOT NULL,
	`img_url`	VARCHAR(255)	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`review_id`	BIGINT	NOT NULL
);

CREATE TABLE `town` (
	`id`	INT	NOT NULL,
	`name`	VARCHAR(255)	NOT NULL
);

CREATE TABLE `user_food_types` (
	`id`	BIGINT	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`updated_at`	DATETIME	NULL,
	`user_id`	BIGINT	NOT NULL,
	`food_type_id`	INT	NOT NULL
);

CREATE TABLE `notification_type` (
	`id`	INT	NOT NULL,
	`type`	VARCHAR(255)	NOT NULL
);

ALTER TABLE `notification` ADD CONSTRAINT `PK_NOTIFICATION` PRIMARY KEY (
	`id`
);

ALTER TABLE `notification_settings` ADD CONSTRAINT `PK_NOTIFICATION_SETTINGS` PRIMARY KEY (
	`id`
);

ALTER TABLE `activated_mission` ADD CONSTRAINT `PK_ACTIVATED_MISSION` PRIMARY KEY (
	`id`
);

ALTER TABLE `review_comment` ADD CONSTRAINT `PK_REVIEW_COMMENT` PRIMARY KEY (
	`id`
);

ALTER TABLE `mission` ADD CONSTRAINT `PK_MISSION` PRIMARY KEY (
	`id`
);

ALTER TABLE `review` ADD CONSTRAINT `PK_REVIEW` PRIMARY KEY (
	`id`
);

ALTER TABLE `food_type` ADD CONSTRAINT `PK_FOOD_TYPE` PRIMARY KEY (
	`id`
);

ALTER TABLE `store` ADD CONSTRAINT `PK_STORE` PRIMARY KEY (
	`id`
);

ALTER TABLE `store_img` ADD CONSTRAINT `PK_STORE_IMG` PRIMARY KEY (
	`id`
);

ALTER TABLE `user` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`id`
);

ALTER TABLE `review_img` ADD CONSTRAINT `PK_REVIEW_IMG` PRIMARY KEY (
	`id`
);

ALTER TABLE `town` ADD CONSTRAINT `PK_TOWN` PRIMARY KEY (
	`id`
);

ALTER TABLE `user_food_types` ADD CONSTRAINT `PK_USER_FOOD_TYPES` PRIMARY KEY (
	`id`
);

ALTER TABLE `notification_type` ADD CONSTRAINT `PK_NOTIFICATION_TYPE` PRIMARY KEY (
	`id`
);


