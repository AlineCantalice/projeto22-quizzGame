import { Request, Response } from "express";
import * as service from "../services/userService";
import { CreateUserData } from "../types/userType";

export async function createUser(req: Request, res: Response) {
        const user: CreateUserData = req.body;

        service.createUser(user);

        res.status(201).send("User created");
}