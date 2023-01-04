import { Request, Response } from "express";
import Customer from "src/models/customer.model";

class ReadController {
  public async handler(req: Request, res: Response): Promise<Response> {
    const { page = 1, limit = 10 } = req.query;

    const options = {
      page: parseInt(page as string, 10),
      limit: parseInt(limit as string, 10),
      sort: { createdAt: -1 },
    };

    try {
      const customers = await Customer.find({}, options);
      return res.status(200).json({ customers, page, limit });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

const readController = new ReadController();
export default readController;
