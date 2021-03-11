ARG NODE_VER=14-buster-slim

FROM node:$NODE_VER

USER node

ENV HUSKY_SKIP_INSTALL=1

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install && \
    yarn cache clean

COPY --chown=node:node . ./

EXPOSE 3000

CMD yarn start
