FROM oven/bun:latest
WORKDIR /app/server
# COPY package.json ./
#COPY bun.lockb ./
#RUN bun install --production --silent
EXPOSE 8080
RUN adduser --disabled-password --gecos "" userbun
RUN chown -R userbun /app/server 
USER userbun
#RUN bun install
RUN echo "Hello from Container !"
COPY . .
#CMD ["bun", "run", "dev"]
CMD ["sh", "-c", "bun install --production --silent && bun run dev"]
