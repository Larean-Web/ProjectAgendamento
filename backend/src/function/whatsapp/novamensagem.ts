import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import api from "../../services/api";
import dotenv from "dotenv";
import CapturarFoto from "./fuction/getfotowhatsapp";
import { diminuirlink } from "../../Ferramentas/PersonalizarURL/diminuirlink";
import EnviarMsg from "./fuction/EnviarMsgQuepasa";

dotenv.config();

const bemvindo =
  "🎉 Olá! Seja muito bem-vindo(a) ao nosso grupo! Estamos felizes em tê-lo(a) conosco. Caso queira agendar algo, é só clicar no link abaixo. Aproveite sua estadia e sinta-se à vontade para interagir conosco! \n \n";

const redirecionar = process.env.REDIRECTAPI || "http://localhost:3001";
const siteCliente = process.env.FRONTCLIENTE || "http://localhost:3001";

const NovaMsg = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const contato = body.chat.id.match(/\d+/)?.[0];
  const horaAtual = new Date();
  const HoraLimite = new Date(horaAtual.getTime() - 4 * 60 * 60 * 1000);
  const fotocontato = await CapturarFoto(body.chat.id);
  const conteudourl = `?id=${contato}`;
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const urlcurta = await diminuirlink(urlgrande, contato);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const retorno = urlcurta;
      const dadoslink = await prisma.linksurl.findUnique({
        where: {
          id: contato,
        },
      });
      console.log(dadoslink);
      if (dadoslink) {
        const chave1 = dadoslink.urlEncurtada;
        const linkfinal = redirecionar + "/" + chave1;
        const mensagemfinal = bemvindo + linkfinal;
        const resposta = await EnviarMsg(cadastrar.id, mensagemfinal);
      }

      return res.status(201).json({
        message:
          "Cadastrado usuario no banco de dados e enviado o link com parametros",
        dados: retorno,
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  const jatem = await prisma.linksurl.findUnique({
    where: {
      id: contato,
    },
  });

  return res.status(200).json({ message: "Ja tem um Link", dados: jatem });
};

export default NovaMsg;
