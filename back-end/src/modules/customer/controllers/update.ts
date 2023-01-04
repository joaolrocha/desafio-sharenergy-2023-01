import { Request, Response } from "express";
import Customer from "src/models/customer.model";

class UpdateController {
  public async handler(req: Request, res: Response): Promise<Response> {
    const { name, email, phone, address, cpf } = req.body;
    const { id } = req.params;

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

    const customer = await Customer.findById(id);

    if (!customer) return res.status(404).json({ error: "Customer not found" });

    customer.name = name;
    customer.email = email;
    customer.phone = phone;

    customer.address = {
      street: address.street,
      number: address.number,
      complement: address.complement,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    };

    customer.cpf = cpf;

    customer.save();

    return res.status(200).json({ customer });
  }
}

const updateController = new UpdateController();
export default updateController;
