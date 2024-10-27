import express, { Request, Response, NextFunction } from "express";
import { errorHandling } from "./middleware/errorhandling";
import cors from "cors";
import path from "path";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));
app.use(router);
app.use(errorHandling);

app.listen(3333, () => console.log("Servidor online!"));
