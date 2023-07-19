import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const urlback = process.env.APIBACK || "http://localhost:3001";

const encurtadorInt = axios.create({
  baseURL: urlback,
  headers: {
    "Content-Type": "application/json",
  },
});

export default encurtadorInt;
