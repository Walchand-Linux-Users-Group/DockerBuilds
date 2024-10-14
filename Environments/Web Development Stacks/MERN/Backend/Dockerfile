FROM node:latest

WORKDIR /app

COPY . .

RUN npm i

RUN npm i -g nodemon

EXPOSE 3000

CMD ["npm","run","dev"]
