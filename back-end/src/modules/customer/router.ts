import { Router } from "express";
import indexController from "./controllers";
import createController from "./controllers/create";
import deleteController from "./controllers/delete";
import readController from "./controllers/read";
import updateController from "./controllers/update";
import createValidatior from "./validators/create";
import updateValidatior from "./validators/update";

const customerRouter = Router();

customerRouter.get("/", readController.handler);
customerRouter.get("/:id", indexController.handler);
customerRouter.post("/", createValidatior, createController.handler);
customerRouter.put("/:id", updateValidatior, updateController.handler);
customerRouter.delete("/:id", deleteController.handler);

export default customerRouter;
