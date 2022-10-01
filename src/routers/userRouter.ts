import { Router } from "express";
import { createUser } from "../controllers/userController";
import * as schemaMiddleware from "../middlewares/schemaMiddleware";
import userSchema from "../schemas/userSchema";

const router = Router();

router.post('/user', schemaMiddleware.validateSchemaMiddleware(userSchema), createUser);

export default router;