/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Administrador` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Administrador_email_key` ON `Administrador`(`email`);
