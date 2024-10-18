FROM oven/bun:latest
WORKDIR /tmp/portfolio/server
COPY package.json ./
COPY bun.lockb ./
RUN bun install --production --silent
EXPOSE 8585
RUN adduser --disabled-password --gecos "" userbun
RUN chown -R userbun /tmp/portfolio/server
RUN ls -lAh
RUN pwd
USER userbun
RUN bun install
COPY . .
CMD ["bun", "run", "dev"]