import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;
    if (!req.file) {
      throw new Error("Error upload file");
    } else {
      const { originalname, filename: banner } = req.file;
      const createProductService = new CreateProductService();
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });
      res.status(200).json(product);
    }
  }
}

export { CreateProductController };
