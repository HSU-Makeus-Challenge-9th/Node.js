-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_region_id_fkey`;

-- DropIndex
DROP INDEX `user_region_id_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `region_id` INTEGER NULL,
    MODIFY `birth_date` DATE NULL;

-- CreateTable
CREATE TABLE `local_login` (
    `id` INTEGER NOT NULL,
    `login_id` VARCHAR(255) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `local_login_login_id_key`(`login_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `local_login` ADD CONSTRAINT `local_login_id_fkey` FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `region`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
