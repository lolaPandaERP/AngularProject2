# build stage
FROM node:lts-alpine as build-stage
RUN mkdir /app
WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

# Copie les fichiers et dossiers du projet dans le conteneur Docker
COPY . .

# Construit l'application pour la production
RUN ng build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Alter Nginx to receive traffic on 8080 instead. Refer below explaination
# App Engine only support port 8080
COPY --from=build-stage /app/deployment/default.conf /etc/nginx/conf.d/default.conf
# Expose container port 8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"] 