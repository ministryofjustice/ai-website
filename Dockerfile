FROM nginxinc/nginx-unprivileged:alpine3.20 AS base-app


FROM node:23-alpine AS base-assets
## this is a base for dev and production assets
## dev uses make, prod does not


FROM node:23-alpine AS assets-dev

RUN apk add --no-cache make bash



#
#   ▒█▀▀█ █▀▀█ █▀▀█ █▀▀▄ █░░█ █▀▀ ▀▀█▀▀ ░▀░ █▀▀█ █▀▀▄
#   ▒█▄▄█ █▄▄▀ █░░█ █░░█ █░░█ █░░ ░░█░░ ▀█▀ █░░█ █░░█
#   ▒█░░░ ▀░▀▀ ▀▀▀▀ ▀▀▀░ ░▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ▀░░▀
#
#   ░░  ░░  ░░  ░░  ░░  ░░  ░░  ░░  ░░  ░░  ░░  ░░  ░░  ░░


FROM base-assets AS assets

## get into the home directory...
WORKDIR /home/node
## what do we need?
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY ./src src
COPY ./utils utils
COPY ./tailwind.config.js tailwind.config.js
COPY .eleventy.js .eleventy.js
COPY .markdownlint.json .markdownlint.json

RUN npm install
RUN npm run build


FROM base-app AS build-prod

COPY --from=assets /home/node/public /usr/share/nginx/html

USER 1000

