import { Request, Response } from "express";
import * as service from "../services/userService";
import { CreateUserData, UpdateUserData } from "../types/userType";

export async function createUser(req: Request, res: Response) {
        const user: CreateUserData = req.body;

        service.createUser(user);

        res.status(201).send("User created");
}

export async function updateScore(req: Request, res: Response) {
        const user = req.body;

        service.updateScore(user.username, Number(user.score));

        res.status(200).send("User updated");
}