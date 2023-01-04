import { Request, Response } from "express";
import Customer from "src/models/customer.model";

class DeleteController {
  public async handler(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.params.id) return res.status(400).json({ error: "Bad request" });

      const customer = await Customer.findById(req.params.id);

      if (!customer) return res.status(404).json({ error: "Not found" });

      await customer.remove();

      return res.status(200).json({ message: "Customer deleted" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

const deleteController = new DeleteController();
export default deleteController;
