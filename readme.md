# Descripció

## Construïm un Xat!!!

Necessitarem socket.io, una biblioteca de JavaScript per a aplicacions web en temps real. Permet la comunicació bidireccional en temps real entre clients i servidors web. Té dues parts: una biblioteca del costat del client que s'executa en el navegador i una biblioteca del costat del servidor per a Node.js. 

## Nivell 1

Crea una aplicació que mostri una pàgina de login on l'usuari/ària pugui entrar en una sala de xat (el client i el server han d'estar completament separats). Obrint la mateixa URL en una altra finestra del navegador podrem fer login amb un altre usuari/ària. Verifica que estan en la mateixa sala i permet que xategin. Afegeix la possibilitat de crear múltiples sales de xat i gestiona la persistència amb MongoDB (amb Mongoose) o MySQL (amb Sequelize).

## Nivell 2

Afegeix autentificació utilitzant Google Token (google-auth-library)

## Nivell 3
Per superar aquest nivell pots afegir diferents opcions:

    Afegeix qualsevol funcionalitat que vegis útil.
    Afegeix la personalització del frontend que vulguis.
    Realitza el frontend amb algun framework (React, Vue, Angular).
    Efectua el projecte amb TypeScript.



### 📥 Installation

To get started with this template, you first need to clone the repository:

```bash
git clone https://github.com/AraManjon/typescript-tdd-template.git
```

Then, install the project dependencies:

```bash
npm install
```

### 🏁 How To Start

To start the server in development mode, run the following script:
```bash
npm run dev
```
Then, open http://localhost:8000 to access the server.


### 🚀 Production

To run the server in production mode, first build the TypeScript code into JavaScript by running:

```bash
npm run build
```

This will generate the dist directory with the compiled JavaScript files.

Then, start the server by running:

```bash
npm start
```

This will start the server and make it available at http://localhost:8000.


### 🏗️ Scripts
This project comes with several predefined scripts in the package.json file:

```test```: Runs tests using Jest.

```lint```: Runs ESLint to check code quality.

```lint:fix```: Runs ESLint to fix code style issues.

```dev```: Starts the development server with ts-node-dev and allows debugging

```build```: Removes the ./dist folder and compiles the TypeScript code into JavaScript in the ./dist folder.

```start```: Starts the server in production using the compiled files in the dist/ folder.

### 📝 Dependencies

- cors: middleware for handling Cross-Origin Resource Sharing (CORS)

- dotenv: loads environment variables from a .env file

- express: web framework for Node.js

- express-promise-router: promise-based router for Express

- helmet: middleware for adding security headers

- mongodb: driver for MongoDB

- mysql2: MySQL client for Node.js

### 🛠️ Dev Dependencies

- @types/cors: TypeScript definitions for cors

- @types/express: TypeScript definitions for express

- @types/jest: TypeScript definitions for jest

- @types/mysql: TypeScript definitions for mysql

- eslint: linter for TypeScript

- eslint-config-codely: ESLint configuration used by CodelyTV

- mysql: MySQL driver for Node.js

- rimraf: cross-platform tool for removing files and directories

- ts-jest: TypeScript preprocessor for Jest

- ts-node-dev: TypeScript execution and development environment for Node.js

- tsc-watch: TypeScript compiler with file watching

### 🗂️ Folder structure

In this folder structure, the code is organized according to the principles of Hexagonal Architecture. 

```
src/
├── backend
│   ├── middlewares
│   ├── App.ts
│   ├── server.start.ts
│   └── Server.ts
├── shared
│   ├── utils
│   ├── domain
│   └── infrastructure
│       ├── config
│       └── persistence
└── user
    ├── application
    │   ├── services
    │   └── use-cases
    ├── domain
    │   ├── entities
    │   └── repositories
    └── infrastructure
        ├── controllers
        ├── repositories
        ├── routes
        ├── services
        └── UserModule.ts
```



