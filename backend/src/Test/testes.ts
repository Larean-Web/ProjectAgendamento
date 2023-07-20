import { Request, Response } from "express";
import { IncurtarF } from "../function/whatsapp/fuction/RequestBackend";
import { enviarParaFila } from "../rabbitmq/rabbitmq";

const teste1 = async (req: Request, res: Response) => {
  const urlOriginal = req.body.urlOriginal;

  const idusuario = req.body.idusuario;

  const retorno = await IncurtarF(urlOriginal, idusuario);

  const teste = "teste"
  await enviarParaFila(teste);

  return res.status(200).json(retorno);
};

export default teste1;
