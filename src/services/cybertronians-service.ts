import { CybertronianModel } from "../models/cybertronian-model";
import * as CybertronianRepository from "../repositories/cybertronian-repository";
import * as HttpResponse from "../utils/http-helper";

export const getCybertronianService = async () => {
  const data = await CybertronianRepository.findAllCybertronians();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getCybertronianByIdService = async (id: number) => {
  //pede para o repositório de dados
  const data = await CybertronianRepository.findCybertroniansById(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const postCybertronianService = async (
  cybertronian: CybertronianModel,
) => {
  let response = null;

  // verificar se o body da requisição não é vazio
  if (!cybertronian || Object.keys(cybertronian).length === 0) {
    await CybertronianRepository.insertCybertronian(cybertronian);
    return HttpResponse.badRequest();
  }

  await CybertronianRepository.insertCybertronian(cybertronian);
  return HttpResponse.created();
};

export const deleteCybertronianService = async (id: number) => {
  let response = null;
  const isDeleted = await CybertronianRepository.deleteOneCybertronian(id);

  await CybertronianRepository.deleteOneCybertronian(id);

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "Deleted" });
  } else {
    response = await HttpResponse.badRequest();
  }
  return response;
};

export const updateCybertronianService = async (
  id: number,
  body: CybertronianModel,
) => {
  const data = await CybertronianRepository.findAndModifyCybertronian(id, body);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.ok(data);
  }
  return response;
};
