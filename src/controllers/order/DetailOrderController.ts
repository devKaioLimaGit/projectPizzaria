import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";
class DetailOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const detailOrderService = new DetailOrderService();

    const orders = await detailOrderService.execute({
      order_id,
    });

    res.status(200).json(orders);
  }
}

export { DetailOrderController };
