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
    response = HttpResponse.ok(data)
  } else {
    response = HttpResponse.noContent()
  }

  return response;
}