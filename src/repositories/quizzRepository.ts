import { prisma } from "../config/database";

export async function getQuizz() {
    return await prisma.question.findMany({
        select: {
            id: true,
            question: true,
            answer: true
        }
    });
}