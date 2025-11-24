/*
  Warnings:

  - You are about to drop the `local_login` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `social_login` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `local_login` DROP FOREIGN KEY `local_login_id_fkey`;

-- DropForeignKey
ALTER TABLE `social_login` DROP FOREIGN KEY `social_login_user_id_fkey`;

-- DropTable
DROP TABLE `local_login`;

-- DropTable
DROP TABLE `social_login`;

-- CreateTable
CREATE TABLE `login_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `sns_id` VARCHAR(255) NULL,
    `password_hash` VARCHAR(255) NULL,
    `refresh_token` VARCHAR(255) NULL,
    `provider` ENUM('local', 'google', 'kakao') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `login_info_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `login_info` ADD CONSTRAINT `login_info_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
