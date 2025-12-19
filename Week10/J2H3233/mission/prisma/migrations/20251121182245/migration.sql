/*
  Warnings:

  - You are about to drop the `locallogin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `locallogin` DROP FOREIGN KEY `LocalLogin_user_id_fkey`;

-- DropTable
DROP TABLE `locallogin`;
