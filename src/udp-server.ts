import * as dgram from "node:dgram";
import { validateCPF } from "./cpf-validator.js";

const PORT = 3001;
const server = dgram.createSocket("udp4");

server.on("error", (err) => {
	console.error(`Erro no servidor: ${err.stack}`);
	server.close();
});

server.on("message", (msg, rinfo) => {
	const cpf = msg.toString().trim();
	console.log(`CPF recebido de ${rinfo.address}:${rinfo.port}: ${cpf}`);

	const result = validateCPF(cpf);
	const response = JSON.stringify(result);

	server.send(response, rinfo.port, rinfo.address, (err) => {
		if (err) {
			console.error("Erro ao enviar resposta:", err);
		}
	});
});

server.on("listening", () => {
	const address = server.address();
	console.log(`Servidor UDP rodando em ${address.address}:${address.port}`);
});

server.bind(PORT);
