FROM node:8.10.0-slim

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . /app
