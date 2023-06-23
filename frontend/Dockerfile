# Estágio de build
FROM node:18 as builder

# Define o diretório de trabalho
WORKDIR /frontend

# Copia os arquivos de configuração do package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos da aplicação
COPY . .

# Executa o build da aplicação
RUN npm run build

# Estágio de produção
FROM nginx:latest

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do estágio de build para o diretório de hospedagem do Nginx
COPY --from=builder /frontend/dist/ /usr/share/nginx/html/

# Copia o arquivo de configuração personalizado do Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para acessar a aplicação
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
