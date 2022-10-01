import { prisma } from "../config/database";
import { CreateUserData } from "../types/userType";

export async function createUser (user: CreateUserData) {
    await prisma.user.create({
        data: user
    });
}