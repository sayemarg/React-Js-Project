# Biuld react project
FROM node:alpine AS builder

ENV NODE_ENV production

WORKDIR /app

COPY ./package*.json .

RUN npm install --dev

COPY . .

RUN npm run build


# Run production in nginx
FROM nginx:alpine as production

ENV NODE_ENV production

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
