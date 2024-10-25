# Docker Image: <image-name>

## Description

These Dockerfiles are designed for **Fullstack MERN Developement**. Together with the main Docker Compose file, this setup allows you to quickly get up and running with MERN Development with Live reload for both Frontend and Backend.
## Getting Started
 
### Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.
- Ensure you have [Node](https://nodejs.org) and [npm](https://www.npmjs.com/) installed on your machine


## Running with Compose 

The recommended way to run all three containers is with **Docker Compose**. Navigate to the root directory containing the `docker-compose.yaml` file, and run:

```
docker compose up --build 
```

For the older `docker-compose` plugin, run:
```
docker-compose up --build
```


## Building the Image
To use the Frontend or Backend images seperately, you can build them manually.
To build the Docker images, navigate to the directory where the `Dockerfile` is located and run the following commands:

```
docker build -t <image-name> <path-to-directory>
```

## Running individual Images

To run the Docker images, use the following commands:

For Backend:

```
docker run -d \
  --name backend \
  -v ./Backend:/app \
  -v /app/node_modules \
  -p 3000:3000 \
  -e DB_URI=mongodb://mongo:27017/ \
    <image-name>
```

For Frontend:
```
docker run -d \
  --name frontend \
  -v ./Frontend:/app \
  -v /app/node_modules \
  -p 5173:5173 \
  -e BACKEND_URI=http://localhost:3000 \
    <image-name>
```
## Features

- Supports live reload on Frontend with `vite` and Backend with `nodemon`
- MongoDB data mounted from disk, ensuring persistance between sessions. 
- Standard port mapping for all services, configurable in `docker-compose.yaml`

---

## Exit Status for Docker Build

`0` = Docker image was built successfully without any errors.

`1` = Build failed due to an error in the Dockerfile or build context.
