import encurtadorInt from "../../../services/encurtadorInt";
import { Request, Response } from "express";

export async function IncurtarF(urlOriginal: string, idusuario: string) {
  try {
    const url = urlOriginal;
    const id = idusuario;

    const pedido = await encurtadorInt.post("/encurtador", {
      idusuario: id,
      urlOriginal: url,
    });
    const retorno = pedido.data;
    console.log(retorno);

    return retorno;
  } catch (error) {
    return console.error(error);
  }
}
