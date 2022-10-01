/*
  Warnings:

  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `score` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "score" DROP CONSTRAINT "score_userId_fkey";

-- DropIndex
DROP INDEX "user_username_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "password",
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "score";
