import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUSerService";
class DetailuserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(user_id);

    res.status(200).json(user);
  }
}

export { DetailuserController };
