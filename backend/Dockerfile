FROM node:latest

WORKDIR /backend

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]

