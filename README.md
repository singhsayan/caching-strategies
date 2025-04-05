# Caching Strategies in Backend Systems

This folder contains different caching strategies implemented using **Node.js**, **Redis**, and **Docker**. Each strategy demonstrates how caching can be used to enhance backend performance, reduce database load, and improve response times.

---
##  Requirements

- [Docker](https://www.docker.com/)
- Docker Compose
- Node.js (optional if using outside Docker)

---

##  What’s Included

Each subfolder includes:

- A small Express-based backend
- Redis caching strategy logic
- Docker setup (`Dockerfile`, `docker-compose.yml`)
- Logging to demonstrate cache behavior
- Sample data flow and behavior via API

---

##  How to Run Any Strategy

Each folder is self-contained. To run a specific caching strategy:

```bash
cd redis-cache      # or lru-cache, write-through, etc.
docker-compose up --build
