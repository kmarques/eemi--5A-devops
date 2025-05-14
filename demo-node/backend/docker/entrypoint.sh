#!/bin/sh
set -e

node app.js &

envsubst </etc/nginx/http.d/default.conf.template >/etc/nginx/http.d/default.conf

exec "$@"
