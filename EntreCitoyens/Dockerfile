# Etape 1 : Builder l'application Angular
FROM node:18 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etape 2 : Servir l'application avec Nginx
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/angular-project /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
