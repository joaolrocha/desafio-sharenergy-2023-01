import { Request, Response } from "express";
import Customer from "src/models/customer.model";

class IndexController {
  public async handler(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Missing required fields" });

    const customer = await Customer.findById(id);
    if (!customer) return res.status(404).json({ error: "Customer not found" });

    return res.status(200).json({ customer });
  }
}

const indexController = new IndexController();
export default indexController;
