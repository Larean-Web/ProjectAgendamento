import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.GERARCHAVEAPI;

const gerarchaveapi = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export { gerarchaveapi };
