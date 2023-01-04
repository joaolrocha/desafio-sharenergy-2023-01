import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import authConfig from "src/config/auth";
import { v4 as uuid } from "uuid";

class SignInController {
  public async handler(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    if (
      !username ||
      !password ||
      username !== process.env.ADMIN_USER ||
      password !== process.env.ADMIN_PASS
    ) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: uuid() }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.status(200).json({ token });
  }
}

const signInController = new SignInController();
export default signInController;
