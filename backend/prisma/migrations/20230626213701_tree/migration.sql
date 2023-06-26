/*
  Warnings:

  - Added the required column `Created` to the `UsuarioCliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UsuarioCliente` ADD COLUMN `Created` DATETIME(3) NOT NULL;
