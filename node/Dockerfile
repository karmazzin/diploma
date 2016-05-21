FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm i -g nodemon \
    && npm i \
    && npm build

COPY . /usr/src/app

EXPOSE 8080
CMD nodemon index.js
