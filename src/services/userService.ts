import { CreateUserData } from "../types/userType";
import * as repository from "../repositories/userRepository";
import { conflictError } from "../utils/errorUtils";

export async function createUser (user: CreateUserData) {
    const userDb = await repository.findByUsername(user.username);

    if (userDb) {
        throw conflictError('Username must be unique');
    }

    await repository.createUser(user);
}