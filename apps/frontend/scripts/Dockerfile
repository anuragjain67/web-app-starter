FROM node:18.12.1-alpine

RUN apk update && apk add --no-cache --virtual .ext-deps \
    build-base \
    libc-dev \
    make \
    g++ \
    gcc \
    bash


WORKDIR /apps/frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN if [ "development" != "${APP_MODE}" ]; then npm run build; fi

EXPOSE 3000

CMD ["/apps/frontend/scripts/entrypoint.sh"]
