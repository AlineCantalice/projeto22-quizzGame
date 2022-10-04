import { Router } from "express";
import { getQuiz } from "../controllers/quizzController";

const router = Router();

router.get('/quiz', getQuiz);

export default router;