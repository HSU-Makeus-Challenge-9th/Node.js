CREATE TABLE `user_mission` (
	`user_id`	bigint	NOT NULL,
	`mission_id`	bigint	NOT NULL,
	`status`	ENUM('CHALLENGING', 'COMPLETED', 'CANCELED') NULL,
	`accepted_at`	datetime	NULL,
	`completed_at`	datetime	NULL
);

CREATE TABLE `inquiry_images` (
	`id`	bigint	NOT NULL,
	`img`	varchar(255)	NULL,
	`inquiry_id`	bigint	NOT NULL
);

CREATE TABLE `terms` (
	`id`	bigint	NOT NULL,
	`is_over_fourteen`	boolean	NULL,
	`agreed_to_terms_of_service`	boolean	NULL,
	`agreed_to_privacy_policy`	boolean	NULL,
	`agreed_to_location_services`	boolean	NULL,
	`agreed_to_marketing_emails`	boolean	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL,
	`user_id`	bigint	NOT NULL
);

CREATE TABLE `prefer_categories` (
	`id`	bigint	NOT NULL,
	`name`	VARCHAR(50)
);

CREATE TABLE `missions` (
	`id`	bigint	NOT NULL,
	`start_date`	datetime	NULL,
	`end_date`	datetime	NULL,
	`money`	bigint	NULL,
	`points`	bigint	NULL,
	`store_id`	bigint	NOT NULL,
	`region_id`	bigint	NOT NULL
);

CREATE TABLE `review_answer` (
	`review_id`	bigint	NOT NULL,
	`content`	text	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL
);

CREATE TABLE `users` (
	`id`	bigint	NOT NULL,
	`name`	varchar(10)	NULL,
	`gender`   ENUM('MALE', 'FEMALE', 'NONE') NULL,
	`birth`	date	NULL,
	`address`	varchar(255)	NULL,
	`detail_address`	varchar(255)	NULL,
	`nickname`	varchar(50)	NULL,
	`email`	varchar(255)	NULL,
	`phone`	varchar(15)	NULL,
	`is_phone_verified`	boolean	NULL,
	`points`	bigint	NULL,
	`provider` ENUM('KAKAO', 'NAVER', 'GOOGLE') NULL,
	`provider_id`	varchar(255)	NULL,
	`role` ENUM('USER', 'OWNER') NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL,
	`status`   ENUM('ACTIVE', 'INACTIVE', 'DELETED'),
	`inactive_date`	datetime	NULL
);

CREATE TABLE `regions` (
	`id`	bigint	NOT NULL,
	`name`	VARCHAR(50)
);

CREATE TABLE `user_prefer` (
	`user_id`	bigint	NOT NULL,
	`category_id`	bigint	NOT NULL
);

CREATE TABLE `review_images` (
	`id`	bigint	NOT NULL,
	`img`	varchar(255)	NULL,
	`review_id`	bigint	NOT NULL
);

CREATE TABLE `store_images` (
	`id`	bigint	NOT NULL,
	`img`	varchar(255)	NULL,
	`store_id`	bigint	NOT NULL
);

CREATE TABLE `stores` (
	`id`	bigint	NOT NULL,
	`name`	varchar(255)	NULL,
	`address`	varchar(255)	NULL,
	`total`	DECIMAL	NULL,
	`count`	bigint	NULL,
	`owner_id`	bigint	NOT NULL
);

CREATE TABLE `store_reviews` (
	`id`	bigint	NOT NULL,
	`content`	text	NULL,
	`score`	DECIMAL	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL,
	`writer_id`	bigint	NOT NULL,
	`store_id`	bigint	NOT NULL
);

CREATE TABLE `inquiries` (
	`id`	bigint	NOT NULL,
	`title`	varchar(255)	NULL,
	`content`	text	NULL,
    `itype`   ENUM('ACCOUNT', 'SERVICE_ERROR', 'PROPOSAL') NULL,
	`status`  ENUM('PENDING', 'ANSWERED') NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL,
	`user_id`	bigint	NOT NULL
);

CREATE TABLE `user_region` (
	`user_id`	bigint	NOT NULL,
	`region_id`	bigint	NOT NULL,
	`success_count`	bigint	NULL,
	`has_bonus`	boolean	NULL
);

ALTER TABLE `user_mission` ADD CONSTRAINT `PK_USER_MISSION` PRIMARY KEY (
	`user_id`,
	`mission_id`
);

ALTER TABLE `inquiry_images` ADD CONSTRAINT `PK_INQUIRY_IMAGES` PRIMARY KEY (
	`id`
);

ALTER TABLE `terms` ADD CONSTRAINT `PK_TERMS` PRIMARY KEY (
	`id`
);

ALTER TABLE `prefer_categories` ADD CONSTRAINT `PK_PREFER_CATEGORIES` PRIMARY KEY (
	`id`
);

ALTER TABLE `missions` ADD CONSTRAINT `PK_MISSIONS` PRIMARY KEY (
	`id`
);

ALTER TABLE `review_answer` ADD CONSTRAINT `PK_REVIEW_ANSWER` PRIMARY KEY (
	`review_id`
);

ALTER TABLE `users` ADD CONSTRAINT `PK_USERS` PRIMARY KEY (
	`id`
);

ALTER TABLE `regions` ADD CONSTRAINT `PK_REGIONS` PRIMARY KEY (
	`id`
);

ALTER TABLE `user_prefer` ADD CONSTRAINT `PK_USER_PREFER` PRIMARY KEY (
	`user_id`,
	`category_id`
);

ALTER TABLE `review_images` ADD CONSTRAINT `PK_REVIEW_IMAGES` PRIMARY KEY (
	`id`
);

ALTER TABLE `store_images` ADD CONSTRAINT `PK_STORE_IMAGES` PRIMARY KEY (
	`id`
);

ALTER TABLE `stores` ADD CONSTRAINT `PK_STORES` PRIMARY KEY (
	`id`
);

ALTER TABLE `store_reviews` ADD CONSTRAINT `PK_STORE_REVIEWS` PRIMARY KEY (
	`id`
);

ALTER TABLE `inquiries` ADD CONSTRAINT `PK_INQUIRIES` PRIMARY KEY (
	`id`
);

ALTER TABLE `user_region` ADD CONSTRAINT `PK_USER_REGION` PRIMARY KEY (
	`user_id`,
	`region_id`
);

ALTER TABLE `user_mission` ADD CONSTRAINT `FK_users_TO_user_mission_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `user_mission` ADD CONSTRAINT `FK_missions_TO_user_mission_1` FOREIGN KEY (
	`mission_id`
)
REFERENCES `missions` (
	`id`
);

ALTER TABLE `review_answer` ADD CONSTRAINT `FK_store_reviews_TO_review_answer_1` FOREIGN KEY (
	`review_id`
)
REFERENCES `store_reviews` (
	`id`
);

ALTER TABLE `user_prefer` ADD CONSTRAINT `FK_users_TO_user_prefer_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `user_prefer` ADD CONSTRAINT `FK_prefer_categories_TO_user_prefer_1` FOREIGN KEY (
	`category_id`
)
REFERENCES `prefer_categories` (
	`id`
);

ALTER TABLE `user_region` ADD CONSTRAINT `FK_users_TO_user_region_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `user_region` ADD CONSTRAINT `FK_regions_TO_user_region_1` FOREIGN KEY (
	`region_id`
)
REFERENCES `regions` (
	`id`
);

INSERT INTO `prefer_categories` (id, name) VALUES
(1, '한식'),
(2, '일식'),
(3, '중식'),
(4, '양식'),
(5, '치킨'),
(6, '분식'),
(7, '고기/구이'),
(8, '도시락'),
(9, '야식'),
(10, '패스트푸드'),
(11, '디저트'),
(12, '아시안푸드');
