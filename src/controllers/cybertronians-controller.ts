import { Request, Response } from "express";
import { getCybertronianService } from "../services/cybertronians-service";

export const getCybertronian = async (req: Request, res: Response) => {
  const httpResponse = await getCybertronianService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
