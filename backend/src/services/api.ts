import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const urlquepasa = process.env.QUEPASAAPI;

const api = axios.create({
  baseURL: urlquepasa,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
