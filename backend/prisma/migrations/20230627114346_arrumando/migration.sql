/*
  Warnings:

  - You are about to drop the column `nome` on the `Servico` table. All the data in the column will be lost.
  - Added the required column `nomeservico` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Servico` DROP COLUMN `nome`,
    ADD COLUMN `nomeservico` VARCHAR(191) NOT NULL;
