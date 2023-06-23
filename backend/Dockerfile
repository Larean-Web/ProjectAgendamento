FROM node:latest

WORKDIR /backend

COPY package.json ./

RUN npm install

COPY . .


CMD [ "ts-node", "src/server.ts"]

