FROM nginx:alpine3.21

WORKDIR /app

COPY index.html ./

COPY docker/nginx/nginx.conf /etc/nginx/templates/default.conf.template
