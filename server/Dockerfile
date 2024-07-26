# Use a Node.js version >= 16
FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 4000

CMD ["node", "index.js"]
