/*
  Warnings:

  - You are about to alter the column `currentCtc` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `expectedCtc` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `experience` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Candidate` MODIFY `currentCtc` VARCHAR(191) NOT NULL,
    MODIFY `expectedCtc` VARCHAR(191) NOT NULL,
    MODIFY `experience` VARCHAR(191) NOT NULL;
