FROM node:latest
WORKDIR /tmp/portfolio/server
COPY package.json package-lock.json ./
run npm install --production --silent
EXPOSE 5060
RUN chown -R node /tmp/portfolio
USER node
RUN npm install
CMD ["npm", "run", "dev"]