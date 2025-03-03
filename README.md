# Sistema de Validação de CPF (TCP/UDP)

Este projeto implementa um sistema cliente-servidor para validação de CPF usando os protocolos TCP e UDP. Desenvolvido em TypeScript e Node.js, o sistema permite validar números de CPF enviados pelo cliente e receber respostas do servidor sobre a validade do documento.

## Requisitos do Sistema

- Node.js (versão 18.0.0 ou superior)
- npm, yarn ou pnpm (gerenciadores de pacotes)

## Instalação do Node.js

### Windows

1. Acesse o site oficial do Node.js: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador e siga as instruções na tela
4. Para verificar a instalação, abra o Prompt de Comando e digite:
   ```
   node --version
   npm --version
   ```

### Linux (Ubuntu/Debian)

1. Atualize os repositórios:
   ```bash
   sudo apt update
   ```

2. Instale o Node.js e npm:
   ```bash
   sudo apt install nodejs npm
   ```

3. Para versões mais recentes, use o NodeSource:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

4. Verifique a instalação:
   ```bash
   node --version
   npm --version
   ```

### Linux (Fedora/CentOS/RHEL)

1. Para Fedora:
   ```bash
   sudo dnf install nodejs
   ```

2. Para CentOS/RHEL:
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs
   ```

3. Verifique a instalação:
   ```bash
   node --version
   npm --version
   ```

## Configuração do Projeto

1. Clone ou baixe o repositório do projeto

2. Navegue até a pasta do projeto:
   ```bash
   cd caminho/para/o/projeto
   ```

3. Instale as dependências:

   **Usando npm:**
   ```bash
   npm install
   ```

   **Usando yarn:**
   ```bash
   yarn install
   ```

   **Usando pnpm:**
   ```bash
   pnpm install
   ```

4. Compile o projeto TypeScript:
   ```bash
   npm run build
   ```
   Isso criará a pasta `dist` com os arquivos JavaScript compilados.

## Executando a Aplicação

### Modo de Desenvolvimento

No modo de desenvolvimento, os arquivos TypeScript são executados diretamente usando ts-node.

#### Servidor e Cliente TCP

1. Em um terminal, inicie o servidor TCP:
   ```bash
   npm run dev:tcp-server
   ```

2. Em outro terminal, inicie o cliente TCP:
   ```bash
   npm run dev:tcp-client
   ```

#### Servidor e Cliente UDP

1. Em um terminal, inicie o servidor UDP:
   ```bash
   npm run dev:udp-server
   ```

2. Em outro terminal, inicie o cliente UDP:
   ```bash
   npm run dev:udp-client
   ```

### Modo de Produção

No modo de produção, os arquivos JavaScript compilados são executados.

#### Servidor e Cliente TCP

1. Em um terminal, inicie o servidor TCP:
   ```bash
   npm run tcp-server
   ```

2. Em outro terminal, inicie o cliente TCP:
   ```bash
   npm run tcp-client
   ```

#### Servidor e Cliente UDP

1. Em um terminal, inicie o servidor UDP:
   ```bash
   npm run udp-server
   ```

2. Em outro terminal, inicie o cliente UDP:
   ```bash
   npm run udp-client
   ```

## Utilizando a Aplicação

1. Após iniciar o cliente (TCP ou UDP), você verá um prompt solicitando um CPF:
   ```
   Digite um CPF para validar (ou "sair" para encerrar):
   ```

2. Digite um CPF (com ou sem pontuação) e pressione Enter:
   ```
   Digite um CPF para validar (ou "sair" para encerrar): 123.456.789-09
   ```

3. O servidor validará o CPF e enviará uma resposta que será exibida no cliente:
   ```
   Resposta do servidor: CPF inválido (primeiro dígito verificador)
   ```

4. Para encerrar o cliente, digite "sair" quando solicitado:
   ```
   Digite um CPF para validar (ou "sair" para encerrar): sair
   ```

## Diferenças entre TCP e UDP

- **TCP (Transmission Control Protocol)**: Protocolo orientado à conexão que garante a entrega e a ordem dos pacotes. Estabelece uma conexão persistente entre cliente e servidor.

- **UDP (User Datagram Protocol)**: Protocolo não orientado à conexão que não garante a entrega ou ordem dos pacotes. Cada mensagem é enviada independentemente.

## Solução de Problemas

### Portas em uso

Se você receber um erro indicando que a porta já está em uso:

1. Encerre o processo que está usando a porta:
   
   **Windows:**
   ```
   netstat -ano | findstr :3000
   taskkill /PID [PID_DO_PROCESSO] /F
   ```

   **Linux:**
   ```bash
   sudo lsof -i :3000
   sudo kill -9 [PID_DO_PROCESSO]
   ```

2. Ou altere as portas no código:
   - TCP: Porta 3000 (em `tcp-server.ts` e `tcp-client.ts`)
   - UDP: Porta 3001 (em `udp-server.ts` e `udp-client.ts`)

### Erros de TypeScript

Se você encontrar erros de compilação TypeScript:

1. Verifique se todas as dependências estão instaladas:
   ```bash
   npm install
   ```

2. Limpe a pasta de build e recompile:
   ```bash
   rm -rf dist
   npm run build
   ```

## Estrutura do Projeto 