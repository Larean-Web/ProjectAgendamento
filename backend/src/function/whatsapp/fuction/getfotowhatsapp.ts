import dotenv from "dotenv";
import api from "../../../services/api";
dotenv.config();

const token = process.env.TOKENQUEPASAAPI;

async function CapturarFoto(contato: string) {
  try {
    const getFotoPerfil = await api.post(`/v3/bot/${token}/picinfo`, {
      chatid: contato,
      id: "",
    });
    const foto = getFotoPerfil.data.info.url;
    return foto;
  } catch (error) {
    console.log('Deu um erro ao capturar a foto');
  }
}

export default CapturarFoto;
