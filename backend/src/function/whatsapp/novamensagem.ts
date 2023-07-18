import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import api from "../../services/api";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.TOKENQUEPASAAPI;
const clienturl = process.env.FRONTCLIENTE

const NovaMsg = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const contato = body.chat.id.match(/\d+/)?.[0];
  const horaAtual = new Date();
  const HoraLimite = new Date(horaAtual.getTime() - 4 * 60 * 60 * 1000);

  const consultardb = await prisma.cliente.findUnique({
    where: {
      id: contato,
    },
  });

  if (!consultardb) {
    try {
      const getFotoPerfil = await api.post(`/v3/bot/${token}/picinfo`, {
        chatid: body.chat.id,
        id: "",
      });
      const retorno = getFotoPerfil.data.info.url;
      console.log(retorno);

      const cadastrar = await prisma.cliente.create({
        data: {
          id: contato,
          fotoperfil: retorno,
          nome: "",
          sobrenome: "",
          updateinfo: horaAtual,
        },
      });

      const sendmsg = await api.post(`/v3/bot/${token}/sendtext`, {
        chatid: body.chat.id,
        text: `Olá Seja Bem Vindo(a), Para Fazer Um agendamento por favor acessar esse link \n ${clienturl + '/'}`,
      });

      return res.status(201).json({
        message:
          "Cadastrado usuario no banco de dados e enviado o link com parametros",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  return res.json("deu certo");
};

export default NovaMsg;
