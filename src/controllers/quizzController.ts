import { Request, Response } from "express";
import * as service from "../services/qizzService";

export async function getQuiz(req: Request, res: Response) {
    const quiz = await service.getQuizz();

    res.send(quiz);
}