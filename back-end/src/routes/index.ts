import { Router } from "express";
import authMiddware from "src/middlewares/auth";
import authRouter from "src/modules/auth/router";
import customerRouter from "src/modules/customer/router";

const router = Router();

router.use("/auth", authRouter);
router.use("/customer", authMiddware, customerRouter);

router.use("/", async (req, res) => {
  return res.status(200).json("::");
});

export { router };
