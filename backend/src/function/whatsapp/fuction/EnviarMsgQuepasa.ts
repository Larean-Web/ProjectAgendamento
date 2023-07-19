import dotenv from "dotenv";
import api from "../../../services/api";

dotenv.config();
const token = process.env.TOKENQUEPASAAPI;

async function EnviarMsg(contato: string, message: string) {
  const id = contato;
  console.log(id);
  const msg = message;
  console.log(msg);
  const enviar = await api.post(`/v3/bot/${token}/sendtext`, {
    chatid: id,
    text: msg,
  });
  
  return 
}

export default EnviarMsg;
