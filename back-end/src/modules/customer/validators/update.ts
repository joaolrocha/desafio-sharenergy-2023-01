import { NextFunction, Request, Response } from "express";
import getValidationErrors from "src/utils/getValidationErros";

import * as Yup from "yup";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string(),
      address: Yup.object().shape({
        street: Yup.string().required(),
        number: Yup.number(),
        complement: Yup.string(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        zipCode: Yup.string().required(),
      }),
      cpf: Yup.string().required(),
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
