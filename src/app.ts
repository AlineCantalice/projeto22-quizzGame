import express from 'express';
import cors from 'cors';
import userRouter from './routers/userRouter';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(cors(), express.json())

app.use(userRouter);

app.use(errorHandlerMiddleware);

export default app;