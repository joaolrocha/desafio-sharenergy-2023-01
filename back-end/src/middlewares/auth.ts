import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "src/config/auth";

interface IDecoded {
  id: string;
}

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provider" });
  }

  const [, token] = authHeader.split(" ");
  try {
    const decoded = verify(token, authConfig.secret) as IDecoded;
    if (decoded) {
      return next();
    }
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }

  return next();
}
