import * as repository from "../repositories/quizzRepository";

export async function getQuizz () {
    return await repository.getQuizz();
}