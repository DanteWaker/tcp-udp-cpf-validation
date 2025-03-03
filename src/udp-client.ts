import * as dgram from "node:dgram";
import * as readline from "node:readline";
import type { ValidationResult } from "./cpf-validator.js";

const PORT = 3001;
const HOST = "localhost";
const client = dgram.createSocket("udp4");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

client.on("message", (msg) => {
	const response = JSON.parse(msg.toString()) as ValidationResult;
	console.log(`Resposta do servidor: ${response.message}`);
	askForCPF();
});

client.on("error", (err) => {
	console.error("Erro no cliente:", err);
	client.close();
	rl.close();
});

function askForCPF(): void {
	rl.question(
		'Digite um CPF para validar (ou "sair" para encerrar): ',
		(cpf) => {
			if (cpf.toLowerCase() === "sair") {
				client.close();
				rl.close();
				return;
			}

			client.send(Buffer.from(cpf), PORT, HOST, (err) => {
				if (err) {
					console.error("Erro ao enviar mensagem:", err);
				}
			});
		},
	);
}

askForCPF();
