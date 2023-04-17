FROM node:19.6.1

WORKDIR /app
EXPOSE 5173/tcp

CMD npx vite --host