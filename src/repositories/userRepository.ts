import { prisma } from "../config/database";
import { CreateUserData, UpdateUserData } from "../types/userType";

export async function createUser (user: CreateUserData) {
    await prisma.user.create({
        data: user
    });
}

export async function updateScore (user: UpdateUserData) {
    await prisma.user.update({
        where: { username: user.username },
        data: {
            score: user.score
        }
    });
}

export async function findByUsername (username: string) {
    return prisma.user.findUnique({
        where: {
            username: username
        }
    });
}