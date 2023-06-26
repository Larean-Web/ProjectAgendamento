FROM node:18 as builder

WORKDIR /backend

COPY package.json .
# sss
RUN npm install 

COPY . .

RUN yarn build

RUN yarn prisma generate


CMD [ "yarn", "play" ]