FROM node:18 AS frontend

WORKDIR /app/frontend

COPY ./frontend/package*.json ./

RUN npm install

COPY ./frontend ./

RUN npm run build

CMD ["npm", "run", "dev"]

FROM node:18 AS backend

WORKDIR /app/backend

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend ./

RUN npx prisma generate

EXPOSE 8080

CMD ["npm", "run", "start:dev"]
