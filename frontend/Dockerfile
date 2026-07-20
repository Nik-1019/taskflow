# TaskFlow frontend container image.
# TODO: Priya Sharma — finalize multi-stage build (build -> nginx serve) for ECS/Fargate.
FROM node:18-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# TODO: Stage 2 — serve static build with nginx. For now just a placeholder.
EXPOSE 3000
CMD ["npm", "run", "dev"]
