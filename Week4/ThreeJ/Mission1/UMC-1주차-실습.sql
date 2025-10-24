-- ======================================================
-- 1. 테이블 생성 (CREATE TABLE)
-- ======================================================

-- 마스터 테이블
CREATE TABLE `prefer_categories` (
	`id` bigint NOT NULL,
	`name` VARCHAR(50)
);
CREATE TABLE `regions` (
	`id` bigint NOT NULL,
	`name` VARCHAR(50)
);

-- 핵심 테이블
CREATE TABLE `users` (
	`id` bigint NOT NULL,
	`name` varchar(255) NULL,
	`gender` ENUM('MALE', 'FEMALE', 'NONE') NULL,
	`birth` date NULL,
	`address` varchar(255) NULL,
	`detail_address` varchar(255) NULL,
	`nickname` varchar(255) NULL,
	`email` varchar(255) NULL,
	`phone` varchar(255) NULL,
	`is_phone_verified` boolean NULL,
	`points` bigint NULL,
	`provider` ENUM('KAKAO', 'NAVER', 'GOOGLE') NULL,
	`provider_id` varchar(255) NULL,
	`role` ENUM('USER', 'OWNER') NULL,
	`created_at` datetime(6) NULL,
	`updated_at` datetime(6) NULL,
	`status` ENUM('ACTIVE', 'INACTIVE', 'DELETED'),
	`inactive_date` datetime NULL
);
CREATE TABLE `stores` (
	`id` bigint NOT NULL,
	`name` varchar(255) NULL,
	`address` varchar(255) NULL,
    `stype`	varchar(255) NULL,
	`total` DECIMAL NULL,
	`count` bigint NULL,
	`owner_id` bigint NOT NULL
);

-- 종속 테이블
CREATE TABLE `terms` (
	`id` bigint NOT NULL,
	`is_over_fourteen` boolean NULL,
	`agreed_to_terms_of_service` boolean NULL,
	`agreed_to_privacy_policy` boolean NULL,
	`agreed_to_location_services` boolean NULL,
	`agreed_to_marketing_emails` boolean NULL,
	`created_at` datetime(6) NULL,
	`updated_at` datetime(6) NULL,
	`user_id` bigint NOT NULL
);
CREATE TABLE `missions` (
	`id` bigint NOT NULL,
	`start_date` datetime NULL,
	`end_date` datetime NULL,
	`money` bigint NULL,
	`points` bigint NULL,
	`store_id` bigint NOT NULL,
	`region_id` bigint NOT NULL
);
CREATE TABLE `store_reviews` (
	`id` bigint NOT NULL,
	`content` text NULL,
	`score` DECIMAL NULL,
	`created_at` datetime(6) NULL,
	`updated_at` datetime(6) NULL,
	`writer_id` bigint NOT NULL,
	`store_id` bigint NOT NULL
);
CREATE TABLE `inquiries` (
	`id` bigint NOT NULL,
	`title` varchar(255) NULL,
	`content` text NULL,
	`itype` ENUM('ACCOUNT', 'SERVICE_ERROR', 'PROPOSAL') NULL,
	`status` ENUM('PENDING', 'ANSWERED') NULL,
	`created_at` datetime(6) NULL,
	`updated_at` datetime(6) NULL,
	`user_id` bigint NOT NULL
);
CREATE TABLE `store_images` (
	`id` bigint NOT NULL,
	`img` varchar(255) NULL,
	`store_id` bigint NOT NULL
);

-- 하위 테이블
CREATE TABLE `review_answer` (
	`review_id` bigint NOT NULL,
	`content` text NULL,
	`created_at` datetime(6) NULL,
	`updated_at` datetime(6) NULL
);
CREATE TABLE `review_images` (
	`id` bigint NOT NULL,
	`img` varchar(255) NULL,
	`review_id` bigint NOT NULL
);
CREATE TABLE `inquiry_images` (
	`id` bigint NOT NULL,
	`img` varchar(255) NULL,
	`inquiry_id` bigint NOT NULL
);

-- 매핑 테이블
CREATE TABLE `user_prefer` (
	`user_id` bigint NOT NULL,
	`category_id` bigint NOT NULL
);
CREATE TABLE `user_region` (
	`user_id` bigint NOT NULL,
	`region_id` bigint NOT NULL,
	`success_count` bigint NULL,
	`has_bonus` boolean NULL
);
CREATE TABLE `user_mission` (
	`user_id` bigint NOT NULL,
	`mission_id` bigint NOT NULL,
	`status` ENUM('CHALLENGING', 'COMPLETED', 'CANCELED') NULL,
	`accepted_at` datetime NULL,
	`completed_at` datetime NULL
);

-- ======================================================
-- 2. 기본 키 (PRIMARY KEY) 설정
-- ======================================================

ALTER TABLE `prefer_categories` ADD CONSTRAINT `PK_PREFER_CATEGORIES` PRIMARY KEY (`id`);
ALTER TABLE `regions` ADD CONSTRAINT `PK_REGIONS` PRIMARY KEY (`id`);
ALTER TABLE `users` ADD CONSTRAINT `PK_USERS` PRIMARY KEY (`id`);
ALTER TABLE `stores` ADD CONSTRAINT `PK_STORES` PRIMARY KEY (`id`);
ALTER TABLE `terms` ADD CONSTRAINT `PK_TERMS` PRIMARY KEY (`id`);
ALTER TABLE `missions` ADD CONSTRAINT `PK_MISSIONS` PRIMARY KEY (`id`);
ALTER TABLE `store_reviews` ADD CONSTRAINT `PK_STORE_REVIEWS` PRIMARY KEY (`id`);
ALTER TABLE `inquiries` ADD CONSTRAINT `PK_INQUIRIES` PRIMARY KEY (`id`);
ALTER TABLE `store_images` ADD CONSTRAINT `PK_STORE_IMAGES` PRIMARY KEY (`id`);
ALTER TABLE `review_answer` ADD CONSTRAINT `PK_REVIEW_ANSWER` PRIMARY KEY (`review_id`);
ALTER TABLE `review_images` ADD CONSTRAINT `PK_REVIEW_IMAGES` PRIMARY KEY (`id`);
ALTER TABLE `inquiry_images` ADD CONSTRAINT `PK_INQUIRY_IMAGES` PRIMARY KEY (`id`);
ALTER TABLE `user_prefer` ADD CONSTRAINT `PK_USER_PREFER` PRIMARY KEY (`user_id`, `category_id`);
ALTER TABLE `user_region` ADD CONSTRAINT `PK_USER_REGION` PRIMARY KEY (`user_id`, `region_id`);
ALTER TABLE `user_mission` ADD CONSTRAINT `PK_USER_MISSION` PRIMARY KEY (`user_id`, `mission_id`);

-- ======================================================
-- 3. AUTO_INCREMENT 속성 추가  <-- 이 부분이 추가되었습니다!
-- ======================================================

ALTER TABLE `prefer_categories` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `regions` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `users` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `stores` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `terms` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `missions` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `store_reviews` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `inquiries` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `store_images` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `review_images` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
ALTER TABLE `inquiry_images` MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

-- ======================================================
-- 4. 외래 키 (FOREIGN KEY) 설정
-- ======================================================

-- stores -> users
ALTER TABLE `stores` ADD CONSTRAINT `FK_users_TO_stores_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`);
-- terms -> users
ALTER TABLE `terms` ADD CONSTRAINT `FK_users_TO_terms_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
-- missions -> stores, regions
ALTER TABLE `missions` ADD CONSTRAINT `FK_stores_TO_missions_1` FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);
ALTER TABLE `missions` ADD CONSTRAINT `FK_regions_TO_missions_1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`);
-- store_reviews -> users, stores
ALTER TABLE `store_reviews` ADD CONSTRAINT `FK_users_TO_store_reviews_1` FOREIGN KEY (`writer_id`) REFERENCES `users` (`id`);
ALTER TABLE `store_reviews` ADD CONSTRAINT `FK_stores_TO_store_reviews_1` FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);
-- inquiries -> users
ALTER TABLE `inquiries` ADD CONSTRAINT `FK_users_TO_inquiries_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
-- store_images -> stores
ALTER TABLE `store_images` ADD CONSTRAINT `FK_stores_TO_store_images_1` FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);
-- review_answer -> store_reviews
ALTER TABLE `review_answer` ADD CONSTRAINT `FK_store_reviews_TO_review_answer_1` FOREIGN KEY (`review_id`) REFERENCES `store_reviews` (`id`);
-- review_images -> store_reviews
ALTER TABLE `review_images` ADD CONSTRAINT `FK_store_reviews_TO_review_images_1` FOREIGN KEY (`review_id`) REFERENCES `store_reviews` (`id`);
-- inquiry_images -> inquiries
ALTER TABLE `inquiry_images` ADD CONSTRAINT `FK_inquiries_TO_inquiry_images_1` FOREIGN KEY (`inquiry_id`) REFERENCES `inquiries` (`id`);
-- user_prefer -> users, prefer_categories
ALTER TABLE `user_prefer` ADD CONSTRAINT `FK_users_TO_user_prefer_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
ALTER TABLE `user_prefer` ADD CONSTRAINT `FK_prefer_categories_TO_user_prefer_1` FOREIGN KEY (`category_id`) REFERENCES `prefer_categories` (`id`);
-- user_region -> users, regions
ALTER TABLE `user_region` ADD CONSTRAINT `FK_users_TO_user_region_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
ALTER TABLE `user_region` ADD CONSTRAINT `FK_regions_TO_user_region_1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`);
-- user_mission -> users, missions
ALTER TABLE `user_mission` ADD CONSTRAINT `FK_users_TO_user_mission_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
ALTER TABLE `user_mission` ADD CONSTRAINT `FK_missions_TO_user_mission_1` FOREIGN KEY (`mission_id`) REFERENCES `missions` (`id`);


-- ======================================================
-- 4. 초기 데이터 (Initial Data) 삽입
-- ======================================================

INSERT INTO `prefer_categories` (name) VALUES
('한식'), ('일식'), ('중식'), ('양식'), ('치킨'), ('분식'),
('고기/구이'), ('도시락'), ('야식'), ('패스트푸드'), ('디저트'), ('아시안푸드');

INSERT INTO `regions` (name) VALUES
('강남구'), ('강동구'), ('강북구'), ('강서구'), ('관악구'),
('광진구'), ('구로구'), ('금천구'), ('노원구'), ('도봉구'),
('동대문구'), ('동작구'), ('마포구'), ('서대문구'), ('서초구'),
('성동구'), ('성북구'), ('송파구'), ('양천구'), ('영등포구'),
('용산구'), ('은평구'), ('종로구'), ('중구'), ('중랑구');