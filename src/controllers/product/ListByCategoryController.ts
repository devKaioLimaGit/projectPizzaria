import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";
class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listCategoryService = new ListByCategoryService();
    const findByCategory = await listCategoryService.execute({ category_id });
    res.status(200).json(findByCategory);
  }
}

export { ListByCategoryController };
