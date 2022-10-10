import { Router } from "express";
import { createUser, updateScore } from "../controllers/userController";
import * as schemaMiddleware from "../middlewares/schemaMiddleware";
import userSchema from "../schemas/userSchema";

const router = Router();

router.post('/user', schemaMiddleware.validateSchemaMiddleware(userSchema), createUser);
router.put('/user', updateScore);

export default router;