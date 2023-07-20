/*
  Warnings:

  - A unique constraint covering the columns `[urlEncurtada]` on the table `linksurl` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `linksurl_urlEncurtada_key` ON `linksurl`(`urlEncurtada`);
