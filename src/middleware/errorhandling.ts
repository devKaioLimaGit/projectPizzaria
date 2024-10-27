import "express-async-errors";
import { Request, Response, NextFunction } from "express";

const errorHandling = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    res.status(400).json({
      error: err.message,
    });
  }
  res.status(500).json({ status: "error", message: "Internal server erro." });
  next(err);
};

export { errorHandling };
