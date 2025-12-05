-- AlterTable
ALTER TABLE `user` MODIFY `gender` ENUM('male', 'female', 'other') NULL,
    MODIFY `address_detail` VARCHAR(255) NULL,
    MODIFY `phone_num` VARCHAR(255) NULL;
