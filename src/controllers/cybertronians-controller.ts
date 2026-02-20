import { Request, Response } from "express";
import * as service from "../services/cybertronians-service";

export const getCybertronian = async (req: Request, res: Response) => {
  const httpResponse = await service.getCybertronianService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getCybertronianById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const id = parseInt(req.params.id as string);
  const httpResponse = await service.getCybertronianByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postCybertronian = async (req: Request, res: Response) => {
  const bodyData = req.body;
  const httpResponse = await service.postCybertronianService(bodyData);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const deleteCybertronian = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const httpResponse = await service.deleteCybertronianService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
