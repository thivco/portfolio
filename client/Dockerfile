FROM node:latest
WORKDIR /app/client
# COPY package.json ./
EXPOSE 9595
# COPY . .
# RUN chown -R node /app/client

USER node
CMD ["sh", "-c", "npm install && npm run dev"]
