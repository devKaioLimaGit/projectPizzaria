import { Router, Request, Response } from "express";
import multer from "multer";
import { CreateUSerController } from "./controllers/user/CreateUSerController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailuserController } from "./controllers/user/DetailUSerController";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/FinishOrderController";
import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("tmp"));

// -- ROTAS USERS --
router.post("/users", new CreateUSerController().handle);
router.post("/session", new AuthUserController().handle);
router.use(isAuthenticated);
router.get("/me", new DetailuserController().handle);
// -- ROTAS CATEGORY --
router.post("/category", new CreateCategoryController().handle);
router.get("/category", new ListCategoryController().handle);
// -- ROTAS PRODUCT --
router.post(
  "/product",
  upload.single("file"),
  new CreateProductController().handle
);
router.get("/product", new ListByCategoryController().handle);
router.get("/category/product", new ListByCategoryController().handle);
// -- ROTAS ORDER --
router.post("/order", new CreateOrderController().handle);
router.delete("/order", new RemoveOrderController().handle);
router.post("/order/add", new AddItemController().handle);
router.delete("/order/remove", new RemoveItemController().handle);
router.put("/order/send", new SendOrderController().handle);
router.get("/orders", new ListOrdersController().handle);
router.get("/order/detail", new DetailOrderController().handle);
router.put("/order/finish", new FinishOrderController().handle);

export { router };
