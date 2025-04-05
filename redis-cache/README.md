
# Redis Caching Layer with Node.js and Docker

A high-performance Node.js application that demonstrates a real-world Redis caching implementation using **Time-To-Live (TTL)** strategy. Built with clean modular code, powered by Docker and Redis, this project simulates how modern backend systems reduce database load and improve response time.

---

## Concepts Covered

✅ Redis as a caching layer  
✅ TTL-based cache invalidation strategy  
✅ Cache Miss vs Cache Hit logic  
✅ Dockerized microservice setup  
✅ Logging for observability and debugging  
✅ Simulated database layer

---

## Tech Stack

- **Node.js** with Express
- **Redis** as cache
- **Docker & Docker Compose**
- Simulated In-memory Database (can be extended to MongoDB/Postgres)

---

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose installed on your system

### ⚙️ Run the App Locally with Docker

---
## Docker Containers
- ![image](https://github.com/user-attachments/assets/0f7d14ad-23ad-41c7-a8d3-79a1a92a0f98)


---
## API ENDPOINT
- ** Example: curl http://localhost:8000/api/products/1
## Output 
- ![image](https://github.com/user-attachments/assets/4bc3448f-aaa2-4dc1-b6b3-e14506a51718)

### Logs Example
- ![image](https://github.com/user-attachments/assets/8827f530-34b9-4264-9529-cda599857ecf)
- ![image](https://github.com/user-attachments/assets/32ef83fe-83ad-4578-82cb-00575497729b)


```bash
docker-compose up --build



