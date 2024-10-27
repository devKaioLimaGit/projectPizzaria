import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";
class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;
    console.log(typeof order_id);
    const removeOrderSercice = new RemoveOrderService();
    const order = await removeOrderSercice.execute({ order_id });
    res.status(200).json(order);
  }
}

export { RemoveOrderController };
