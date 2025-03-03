import * as net from "node:net";
import { validateCPF } from "./cpf-validator.js";

const PORT = 3000;

const server = net.createServer((socket) => {
	console.log("Cliente conectado");

	socket.on("data", (data) => {
		const cpf = data.toString().trim();
		console.log(`CPF recebido: ${cpf}`);

		const result = validateCPF(cpf);

		socket.write(JSON.stringify(result));
	});

	socket.on("end", () => {
		console.log("Cliente desconectado");
	});

	socket.on("error", (err) => {
		console.error("Erro de conexão:", err);
	});
});

server.listen(PORT, () => {
	console.log(`Servidor TCP rodando na porta ${PORT}`);
});
