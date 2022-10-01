import { CreateUserData } from "../types/userType";
import * as repository from "../repositories/userRepository";

export async function createUser (user: CreateUserData) {
    await repository.createUser(user);
}