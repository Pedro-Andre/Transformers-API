import * as CybertronianRepository from "../repositories/cybertronian-repository";
import { noContent, ok } from "../utils/http-helper";

export const getCybertronianService = async () => {
  const data = await CybertronianRepository.findAllCybertronians();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
