import { Request, Response } from "express";
import { CreateUSerService } from "../../services/user/CreateUSerService";

class CreateUSerController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const createUSerService = new CreateUSerService();
    const user = await createUSerService.execute({ name, email, password });
    res.status(200).json(user);
  }
}

export { CreateUSerController };
