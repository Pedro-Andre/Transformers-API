import { Request, Response } from "express";
import * as service from "../services/cybertronians-service";

export const getCybertronian = async (req: Request, res: Response) => {
  const httpResponse = await service.getCybertronianService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getCybertronianById = async (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.getCybertronianByIdService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body);

}