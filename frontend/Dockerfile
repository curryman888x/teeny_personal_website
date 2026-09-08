# syntax=docker/dockerfile:1
# Dev image for the Vite dev server. Source is bind-mounted by compose;
# node_modules lives in an anonymous volume (see compose.yaml).
FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
