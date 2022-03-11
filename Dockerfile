FROM node:lts-alpine as base
RUN apk update

WORKDIR /app
COPY . .
RUN npm install && npm run build

CMD ["node", "./server.js"]