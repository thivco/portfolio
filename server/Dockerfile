FROM oven/bun:latest
WORKDIR /app/server
# COPY package.json ./
#COPY bun.lockb ./
#RUN bun install --production --silent
EXPOSE 8585
RUN adduser --disabled-password --gecos "" userbun
#RUN chown -R userbun /app/server
USER userbun
#RUN bun install
COPY . .
#CMD ["bun", "run", "dev"]
CMD ["sh", "-c", "bun install --production --silent && bun run dev"]
