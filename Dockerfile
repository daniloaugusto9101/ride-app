# Use a imagem base do Node.js
FROM node:18 AS frontend

# Defina o diretório de trabalho no container
WORKDIR /app/frontend

# Copie o package.json e o package-lock.json
COPY ./frontend/package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY ./frontend ./

# Build the frontend
RUN npm run build

# Comando para iniciar a aplicação frontend
CMD ["npm", "run", "dev"]

# Backend stage
FROM node:18 AS backend

# Defina o diretório de trabalho no container
WORKDIR /app/backend

# Copie o package.json e o package-lock.json
COPY ./backend/package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY ./backend ./

# Exponha a porta 8080 para a API
EXPOSE 8080

# Comando para iniciar a aplicação backend
CMD ["npm", "run", "start:dev"]