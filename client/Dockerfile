FROM node:latest
WORKDIR /tmp/portfolio/client
COPY package.json ./
RUN npm install --production --silent
EXPOSE 9595
RUN chown -R node /tmp/portfolio/client
USER node
RUN npm install
CMD ["npm", "run", "dev"]