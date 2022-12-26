#!/usr/bin/env bash

if [ "development" = "${APP_MODE}" ]; then
    npm start
else
    mkdir -p /data/frontend
    rsync -xva --delete build/ /data/frontend/build
    exit 0
fi
