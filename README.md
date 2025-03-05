# CPF Validation System (TCP/UDP)

This project implements a client-server system for validating Brazilian CPF numbers using both TCP and UDP protocols. Developed in TypeScript and Node.js, the system allows clients to send CPF numbers and receive validation responses from the server.

## System Requirements

- Node.js (version 18.0.0 or higher)
- npm, yarn, or pnpm (package managers)

## Node.js Installation

### Windows

1. Visit the official Node.js website: https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the on-screen instructions
4. To verify the installation, open Command Prompt and type:
   ```
   node --version
   npm --version
   ```

### Linux (Ubuntu/Debian)

1. Update repositories:
   ```bash
   sudo apt update
   ```

2. Install Node.js and npm:
   ```bash
   sudo apt install nodejs npm
   ```

3. For newer versions, use NodeSource:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Linux (Fedora/CentOS/RHEL)

1. For Fedora:
   ```bash
   sudo dnf install nodejs
   ```

2. For CentOS/RHEL:
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs
   ```

3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

## Project Setup

1. Clone or download the project repository

2. Navigate to the project folder:
   ```bash
   cd path/to/project
   ```

3. Install dependencies:

   **Using npm:**
   ```bash
   npm install
   ```

   **Using yarn:**
   ```bash
   yarn install
   ```

   **Using pnpm:**
   ```bash
   pnpm install
   ```

4. Compile the TypeScript project:
   ```bash
   npm run build
   ```
   This will create the `dist` folder with the compiled JavaScript files.

## Running the Application

#### TCP Server and Client

1. In one terminal, start the TCP server:
   ```bash
   npm run tcp-server
   ```

2. In another terminal, start the TCP client:
   ```bash
   npm run tcp-client
   ```

#### UDP Server and Client

1. In one terminal, start the UDP server:
   ```bash
   npm run udp-server
   ```

2. In another terminal, start the UDP client:
   ```bash
   npm run udp-client
   ```

## Using the Application

1. After starting the client (TCP or UDP), you will see a prompt asking for a CPF:
   ```
   Enter a CPF to validate (or "exit" to quit):
   ```

2. Type a CPF (with or without punctuation) and press Enter:
   ```
   Enter a CPF to validate (or "exit" to quit): 123.456.789-09
   ```

3. The server will validate the CPF and send a response that will be displayed on the client:
   ```
   Server response: Invalid CPF (first verification digit)
   ```

4. To exit the client, type "exit" when prompted:
   ```
   Enter a CPF to validate (or "exit" to quit): exit
   ```

## Differences Between TCP and UDP

- **TCP (Transmission Control Protocol)**: Connection-oriented protocol that guarantees delivery and order of packets. Establishes a persistent connection between client and server.

- **UDP (User Datagram Protocol)**: Connectionless protocol that does not guarantee delivery or order of packets. Each message is sent independently.

## Troubleshooting

### Ports in Use

If you receive an error indicating that the port is already in use:

1. Terminate the process using the port:
   
   **Windows:**
   ```
   netstat -ano | findstr :3000
   taskkill /PID [PROCESS_PID] /F
   ```

   **Linux:**
   ```bash
   sudo lsof -i :3000
   sudo kill -9 [PROCESS_PID]
   ```

2. Or change the ports in the code:
   - TCP: Port 3000 (in `tcp-server.ts` and `tcp-client.ts`)
   - UDP: Port 3001 (in `udp-server.ts` and `udp-client.ts`)

### TypeScript Errors

If you encounter TypeScript compilation errors:

1. Verify that all dependencies are installed:
   ```bash
   npm install
   ```

2. Clean the build folder and recompile:
   ```bash
   rm -rf dist
   npm run build
   ```

## Project Structure

```
project/
├── package.json         # Project configuration and scripts
├── tsconfig.json        # TypeScript configuration
├── .gitignore           # Files ignored by Git
├── src/                 # Source code
│   ├── cpf-validator.ts # CPF validation logic
│   ├── tcp-server.ts    # TCP server
│   ├── tcp-client.ts    # TCP client
│   ├── udp-server.ts    # UDP server
│   └── udp-client.ts    # UDP client
└── dist/                # Compiled code (generated)
```

## CPF Validation Algorithm

The system uses the official Brazilian algorithm for CPF validation, which includes:

1. Format verification (11 digits)
2. Repeated digits verification (invalid)
3. Calculation and validation of the two verification digits

## Technologies Used

- TypeScript
- Node.js (ESM - ECMAScript Modules)
- Native Node.js modules (net, dgram)
