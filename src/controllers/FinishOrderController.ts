import { Request, Response } from "express";
import { FinishOrderService } from "../services/order/FinishOrderService";
class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;
    const finishOrderController = new FinishOrderService();
    const order = await finishOrderController.execute({ order_id });
    res.status(200).json(order);
  }
}

export { FinishOrderController };
