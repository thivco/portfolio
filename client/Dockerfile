FROM node:latest
WORKDIR /tmp/portfolio/client
COPY package.json package-lock.json ./
run npm install --production --silent
EXPOSE 9595
USER node
RUN npm install
CMD ["npm", "run", "dev"]