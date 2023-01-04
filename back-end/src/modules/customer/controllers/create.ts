import { Request, Response } from "express";
import Customer from "src/models/customer.model";

class CreateController {
  public async handler(req: Request, res: Response): Promise<Response> {
    const { name, email, phone, address, cpf } = req.body;

    if (
      !name ||
      !email ||
      !cpf ||
      (address &&
        (!address.street ||
          !address.city ||
          !address.state ||
          !address.zipCode))
    )
      return res.status(400).json({ error: "Missing required fields" });

    const customer = await Customer.create({
      name,
      email,
      phone,
      address,
      cpf,
    });

    return res.status(200).json({ customer });
  }
}

const createController = new CreateController();
export default createController;
