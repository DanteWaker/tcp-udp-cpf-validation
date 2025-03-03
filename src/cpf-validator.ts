interface ValidationResult {
	valid: boolean;
	message: string;
}

function validateCPF(cpfInput: string): ValidationResult {
	const cpf = cpfInput.replace(/[^\d]/g, "");

	if (cpf.length !== 11) {
		return { valid: false, message: "CPF deve ter 11 dígitos" };
	}

	if (/^(\d)\1+$/.test(cpf)) {
		return { valid: false, message: "CPF inválido (dígitos repetidos)" };
	}

	let sum = 0;
	for (let i = 0; i < 9; i++) {
		sum += Number.parseInt(cpf.charAt(i)) * (10 - i);
	}

	const remainder = sum % 11;
	const digit1 = remainder < 2 ? 0 : 11 - remainder;

	if (Number.parseInt(cpf.charAt(9)) !== digit1) {
		return {
			valid: false,
			message: "CPF inválido (primeiro dígito verificador)",
		};
	}

	sum = 0;
	for (let i = 0; i < 10; i++) {
		sum += Number.parseInt(cpf.charAt(i)) * (11 - i);
	}

	const remainder2 = sum % 11;
	const digit2 = remainder2 < 2 ? 0 : 11 - remainder2;

	if (Number.parseInt(cpf.charAt(10)) !== digit2) {
		return {
			valid: false,
			message: "CPF inválido (segundo dígito verificador)",
		};
	}

	return { valid: true, message: "CPF válido" };
}

export { validateCPF };
export type { ValidationResult };
