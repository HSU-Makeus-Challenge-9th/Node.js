CREATE TABLE `stores` (
	`id`	bigint	NOT NULL,
	`name`	varchar(25)	NULL,
	`address`	varchar(255)	NULL,
	`stars`	double	NULL,
	`reviews`	bigint	NULL,
	`store_type`	enum('type1','type2','type3')	NULL,
	`price`	int	NULL,
	`menu_name`	text	NULL
);

CREATE TABLE `review_imgs` (
	`id`	bigint	NOT NULL,
	`review_id`	bigint	NOT NULL,
	`review_img`	varchar(255)	NULL
);

CREATE TABLE `store_review` (
	`id`	bigint	NOT NULL,
	`store_id`	bigint	NOT NULL,
	`user_id`	bigint	NOT NULL,
	`title`	varchar(255)	NULL,
	`context`	text	NULL,
	`score`	int	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL
);

CREATE TABLE `review_answer` (
	`id`	bigint	NOT NULL,
	`review_id`	bigint	NOT NULL,
	`context`	text	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL
);

CREATE TABLE `mapping` (
	`id`	bigint	NOT NULL,
	`user_id`	bigint	NOT NULL,
	`category_id`	bigint	NOT NULL
);

CREATE TABLE `inquiries_img` (
	`id`	bigint	NOT NULL,
	`inquiry_id`	bigint	NOT NULL,
	`img`	varchar(255)	NULL
);

CREATE TABLE `mission_mapping` (
	`user_id`	bigint	NOT NULL,
	`mission_id`	bigint	NOT NULL,
	`status`	enum('진행중', '완료')	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL,
	`limited_at`	int	NULL
);

CREATE TABLE `users` (
	`id`	bigint	NOT NULL,
	`name`	varchar(20)	NULL,
	`gender`	enum('남', '여')	NULL,
	`birth`	date	NULL,
	`address`	text	NULL,
	`service`	enum('BASIC', 'PREMIUM')	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL,
	`status`	varchar(15)	NULL,
	`inactive_date`	datetime	NULL,
	`point`	int	NULL,
	`nickname`	varchar(255)	NULL,
	`Field`	VARCHAR(255)	NULL
);

CREATE TABLE `inquiries` (
	`id`	bigint	NOT NULL,
	`user_id`	bigint	NOT NULL,
	`title`	varchar(255)	NULL,
	`context`	text	NULL,
	`type`	enum('일반', '신고', '기타')	NULL,
	`status`	enum('대기', '처리중', '완료')	NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL
);

CREATE TABLE `missions` (
	`id`	bigint	NOT NULL,
	`point`	bigint	NULL,
	`store_id`	bigint	NOT NULL,
	`start_date`	datetime	NULL,
	`end_date`	datetime	NULL,
	`region`	enum('서울', '부산', '기타')	NULL
);

CREATE TABLE `perfer_categories` (
	`id`	bigint	NOT NULL,
	`name`	enum('한식','중식','양식','일식','기타')	NULL
);

CREATE TABLE `complete_mission` (
	`id`	bigint	NOT NULL,
	`user_id`	bigint	NOT NULL,
	`count`	int	NULL
);

CREATE TABLE `agreements` (
	`id`	bigint	NOT NULL,
	`user_id`	bigint	NOT NULL,
	`is_service_agreed`	boolean	NULL,
	`is_personal_agreed`	boolean	NULL,
	`is_location_agreed`	boolean	NULL,
	`is_alram_agreed`	boolean	NULL,
	`if_fourteen_agreed`	boolean	NULL,
	`is_created`	datetime(6)	NULL,
	`is_updated`	datetime(6)	NULL
);

ALTER TABLE `stores` ADD CONSTRAINT `PK_STORES` PRIMARY KEY (
	`id`
);

ALTER TABLE `review_imgs` ADD CONSTRAINT `PK_REVIEW_IMGS` PRIMARY KEY (
	`id`,
	`review_id`
);

ALTER TABLE `store_review` ADD CONSTRAINT `PK_STORE_REVIEW` PRIMARY KEY (
	`id`,
	`store_id`,
	`user_id`
);

ALTER TABLE `review_answer` ADD CONSTRAINT `PK_REVIEW_ANSWER` PRIMARY KEY (
	`id`,
	`review_id`
);

ALTER TABLE `mapping` ADD CONSTRAINT `PK_MAPPING` PRIMARY KEY (
	`id`,
	`user_id`,
	`category_id`
);

ALTER TABLE `inquiries_img` ADD CONSTRAINT `PK_INQUIRIES_IMG` PRIMARY KEY (
	`id`,
	`inquiry_id`
);

ALTER TABLE `mission_mapping` ADD CONSTRAINT `PK_MISSION_MAPPING` PRIMARY KEY (
	`user_id`,
	`mission_id`
);

ALTER TABLE `users` ADD CONSTRAINT `PK_USERS` PRIMARY KEY (
	`id`
);

ALTER TABLE `inquiries` ADD CONSTRAINT `PK_INQUIRIES` PRIMARY KEY (
	`id`,
	`user_id`
);

ALTER TABLE `missions` ADD CONSTRAINT `PK_MISSIONS` PRIMARY KEY (
	`id`
);

ALTER TABLE `perfer_categories` ADD CONSTRAINT `PK_PERFER_CATEGORIES` PRIMARY KEY (
	`id`
);

ALTER TABLE `complete_mission` ADD CONSTRAINT `PK_COMPLETE_MISSION` PRIMARY KEY (
	`id`,
	`user_id`
);

ALTER TABLE `agreements` ADD CONSTRAINT `PK_AGREEMENTS` PRIMARY KEY (
	`id`,
	`user_id`
);

ALTER TABLE `review_imgs` ADD CONSTRAINT `FK_store_review_TO_review_imgs_1` FOREIGN KEY (
	`review_id`
)
REFERENCES `store_review` (
	`id`
);

ALTER TABLE `store_review` ADD CONSTRAINT `FK_stores_TO_store_review_1` FOREIGN KEY (
	`store_id`
)
REFERENCES `stores` (
	`id`
);

ALTER TABLE `store_review` ADD CONSTRAINT `FK_users_TO_store_review_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `review_answer` ADD CONSTRAINT `FK_store_review_TO_review_answer_1` FOREIGN KEY (
	`review_id`
)
REFERENCES `store_review` (
	`id`
);

ALTER TABLE `mapping` ADD CONSTRAINT `FK_users_TO_mapping_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `mapping` ADD CONSTRAINT `FK_perfer_categories_TO_mapping_1` FOREIGN KEY (
	`category_id`
)
REFERENCES `perfer_categories` (
	`id`
);

ALTER TABLE `inquiries_img` ADD CONSTRAINT `FK_inquiries_TO_inquiries_img_1` FOREIGN KEY (
	`inquiry_id`
)
REFERENCES `inquiries` (
	`id`
);

ALTER TABLE `mission_mapping` ADD CONSTRAINT `FK_users_TO_mission_mapping_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `mission_mapping` ADD CONSTRAINT `FK_missions_TO_mission_mapping_1` FOREIGN KEY (
	`mission_id`
)
REFERENCES `missions` (
	`id`
);

ALTER TABLE `inquiries` ADD CONSTRAINT `FK_users_TO_inquiries_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `complete_mission` ADD CONSTRAINT `FK_users_TO_complete_mission_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `agreements` ADD CONSTRAINT `FK_users_TO_agreements_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`id`
);
