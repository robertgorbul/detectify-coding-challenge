ARG NODE_VER=14-buster-slim

FROM node:$NODE_VER AS build

WORKDIR /tmp

ENV HUSKY_SKIP_INSTALL=1

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn export

# Production build
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./docker/nginx /etc/nginx
COPY --chown=nginx:nginx --from=build /tmp/out /usr/share/nginx/html

EXPOSE 80
