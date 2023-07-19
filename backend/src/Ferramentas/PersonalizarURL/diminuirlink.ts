import prisma from "../../prisma";
import gerarChave from "./gerarchave";

export async function diminuirlink(urlOriginal: string, idusuario: string) {
  try {
    const urlgrande = urlOriginal;
    const id = idusuario;
    const chavealeatoria = gerarChave(10);

    if (!urlgrande) {
      return JSON.stringify({ message: "Url nao informada" });
    }
    if (!id) {
      return JSON.stringify({ message: "Id usuario nao informado" });
    }

    const consultar = await prisma.linksurl.findUnique({
      where: {
        id,
      },
    });

    if (consultar) {
      return consultar;
    }

    if (!consultar) {
      const cadastrar = await prisma.linksurl.create({
        data: {
          urlOriginal: urlgrande,
          id: id,
          urlEncurtada: chavealeatoria,
          clienteId: id,
        },
      });
      return cadastrar;
    }
  } catch (error) {
    console.log(error);
  }
}
