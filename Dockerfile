# Dockerfile
# 1st Stage
FROM node:10.15.1 AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json . 
RUN npm install --ignore-platform
COPY . .
RUN file="$(ls -alh)" && echo $file
RUN npm run build
# 2nd Stage
FROM nginx:1.14.2-alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

