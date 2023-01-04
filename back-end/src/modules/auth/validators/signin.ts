import { NextFunction, Request, Response } from "express";
import getValidationErrors from "src/utils/getValidationErros";

import * as Yup from "yup";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error: any) {
    let err = error;
    if (error instanceof Yup.ValidationError) {
      err = getValidationErrors(error);
    }
    return res.status(400).json({
      error: "Validation fails",
      messages: err,
    });
  }
};
