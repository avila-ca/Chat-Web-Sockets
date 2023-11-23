
### 📥 Installation
_________________________________________
To get started with this template, you first need to clone the repository:

```bash
git clone https://github.com/avila-ca/Api-Rest-Hexagonal
```

Then, install the project dependencies:

```bash
npm install
```

Put your password in the .env-template file:

...

MONGO_URI=mongodb+srv://root:<password>@todo.pm4fsjf.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp



### 🏁 How To Start

To start the server in development mode, run the following script:

```bash
npm run dev
```
Then, open http://localhost:8000/api to access the server.

## GET Request

http://localhost:8000/api

## POST Request
In the body:
{
  "content":"New entry!!!"
}

http://localhost:8000/api

## UPDATE Request

{
  "content":"Updated!!!"
}

http://localhost:8000/api/<id_task>

## DELETE Request

http://localhost:8000/api/<id_task>


#### Check all request with the ```thunder-collection_Todo.json``` file


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
###  Tests

```bash
npm run test
```


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
└── todo
    ├── application
    ├── domain
    │   ├── entities
    │   └── repositories
    └── infrastructure
        ├── MongoRepositories
        ├── routes
        ├── model
```
