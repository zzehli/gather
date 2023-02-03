FROM node:18-alpine
WORKDIR /backend
COPY . .
RUN npm ci
EXPOSE 4000
CMD node server.js