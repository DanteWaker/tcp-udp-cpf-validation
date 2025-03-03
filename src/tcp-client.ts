import * as net from "node:net";
import * as readline from "node:readline";
import type { ValidationResult } from "./cpf-validator.js";

const PORT = 3000;
const HOST = "localhost";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const client = new net.Socket();

client.connect(PORT, HOST, () => {
	console.log("Conectado ao servidor");
	askForCPF();
});

client.on("data", (data) => {
	const response = JSON.parse(data.toString()) as ValidationResult;
	console.log(`Resposta do servidor: ${response.message}`);

	askForCPF();
});

client.on("close", () => {
	console.log("Conexão encerrada");
	rl.close();
});

client.on("error", (err) => {
	console.error("Erro de conexão:", err);
	rl.close();
});

function askForCPF(): void {
	rl.question(
		'Digite um CPF para validar (ou "sair" para encerrar): ',
		(cpf) => {
			if (cpf.toLowerCase() === "sair") {
				client.end();
				return;
			}

			client.write(cpf);
		},
	);
}
