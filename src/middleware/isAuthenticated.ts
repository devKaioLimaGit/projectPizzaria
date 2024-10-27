import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface Payload {
  sub: string;
}
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // receber o token:
  const authToken = req.headers.authorization;
  if (!authToken) {
    res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    // Recupera o id do token e coloca dentro de uma variável user_id dentro do req
    req.user_id = sub;

    next();
  } catch (err) {
    res.status(401).end();
  }
}
