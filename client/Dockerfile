FROM node:latest
WORKDIR /tmp/portfolio/client
COPY package.json package-lock.json ./
run npm install --production --silent
EXPOSE 5055
RUN chown -R node /tmp/portfolio
USER node
RUN npm install
CMD ["npm", "run", "dev"]