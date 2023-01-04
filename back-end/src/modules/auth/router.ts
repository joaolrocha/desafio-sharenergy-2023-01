import { Router } from "express";
import signInController from "./controllers/signin";
import signInValidator from "./validators/signin";
const authRouter = Router();

authRouter.post("/", signInValidator, signInController.handler);

export default authRouter;
