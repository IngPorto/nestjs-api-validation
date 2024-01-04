# Task Application On Nest.js

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Conocimiento

Se debe instalar Nestjs de forma global y crear el proyecto.

```bash
npm i -g @nestjs/cli

nest new <nombre_proyecto>

cd <nombre_proyecto>
```

Nestjs agrupa todo por **Módulos**. Para crear un módulo, controlladores y service:

```bash
nest generate module <mi_modulo>

# Sin archivo de testing
nest generate controller <mi_controller> --no-spec

nest generate service <mi_service> --no-spec
```

## Mongo DB

```bash
npm i @nestjs/mongoose mongoose
```
