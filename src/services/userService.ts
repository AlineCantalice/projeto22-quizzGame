import { CreateUserData } from "../types/userType";
import * as repository from "../repositories/userRepository";
import { conflictError, notFoundError } from "../utils/errorUtils";

export async function createUser(user: CreateUserData) {
    const userDb = await repository.findByUsername(user.username);

    if (userDb) {
        throw conflictError('Username must be unique');
    }

    await repository.createUser(user);
}

export async function updateScore(username: string, score: number) {
    const userDb = await repository.findByUsername(username);

    if (!userDb) {
        throw notFoundError('Username not found');
    }

    await repository.updateScore({ username, score });
}