import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import api from "../../services/api";
import dotenv from "dotenv";
import CapturarFoto from "./fuction/getfotowhatsapp";
import { diminuirlink } from "../../Ferramentas/PersonalizarURL/diminuirlink";

dotenv.config();

const token = process.env.TOKENQUEPASAAPI;
const redirecionar = process.env.REDIRECTAPI;
const siteCliente = process.env.FRONTCLIENTE;

const NovaMsg = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const contato = body.chat.id.match(/\d+/)?.[0];
  const horaAtual = new Date();
  const HoraLimite = new Date(horaAtual.getTime() - 4 * 60 * 60 * 1000);
  const fotocontato = await CapturarFoto(body.chat.id);
  const conteudourl = `?id=${contato}&fotoperfil=${fotocontato}`;
  const urlgrande = siteCliente + "/" + conteudourl;
  const consultardb = await prisma.cliente.findUnique({
    where: {
      id: contato,
    },
  });
  if (!consultardb) {
    try {
      const cadastrar = await prisma.cliente.create({
        data: {
          id: contato,
          fotoperfil: fotocontato,
          nome: "",
          sobrenome: "",
          updateinfo: horaAtual,
        },
      });
      await new Promise(resolve => setTimeout(resolve, 3000))
      const urlcurta = await diminuirlink(urlgrande, contato);
      await new Promise(resolve => setTimeout(resolve, 3000))
      const retorno =  urlcurta;
      console.log(retorno)

      

      const sendmsg = await api.post(`/v3/bot/${token}/sendtext`, {
        chatid: body.chat.id,
        text: `Olá Seja Bem Vindo(a), Para Fazer Um agendamento por favor acessar esse link \n ${
          redirecionar + "/"
        }`,
      });

      return res.status(201).json({
        message:
          "Cadastrado usuario no banco de dados e enviado o link com parametros",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  return res.json("Usuario ja cadastrado");
};

export default NovaMsg;
