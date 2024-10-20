FROM node:latest

WORKDIR /app

COPY . .

RUN npm i --save

EXPOSE 5173

CMD ["npm","run","dev","--","--host"]