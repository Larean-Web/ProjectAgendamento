"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teste = async (req, res) => {
    try {
        console.log(req.method);
        return res.status(200).json({ message: "teste deu certo" });
    }
    catch (error) {
        return res.status(400).json({ message: "teste deu erro" });
    }
};
exports.default = teste;
