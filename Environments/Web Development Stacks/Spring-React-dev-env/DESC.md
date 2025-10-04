# Docker Image: spring-react-dev-env

![Docker](https://img.shields.io/badge/Docker-Compose-blue)
![License](https://img.shields.io/badge/License-MIT-green)

##  Description

This setup provides a complete, containerized development environment for building full-stack applications with a **Spring Boot backend** and a **React frontend**.  
It uses **Docker Compose** to manage both services, with hot-reloading enabled through volume mounts.  

No local installation of **Java**, **Maven**, or **Node.js** is required.

---

##  Getting Started / Workflow

### 1. Clone the Repository
Clone this repository and navigate to the project directory:

```bash
git clone <your-repo-url>
cd spring-react-dev-env
```

---

### 2. Create Application Code Directories
Create directories for your backend (Spring Boot) and frontend (React) projects:

```bash
mkdir -p app-code/backend app-code/frontend
```

---

### 3. Launch the Environment
Start the environment using Docker Compose:

```bash
docker-compose up -d --build
```

---

### 4. Generate a New Spring Boot Project
Open a shell inside the **backend** container:

```bash
docker-compose exec backend bash
```

Inside the container, generate your Spring Boot project using [start.spring.io](https://start.spring.io) or Maven archetypes inside the `/app` directory.  
The files will appear locally in your `./app-code/backend` folder.

---

### 5. Create a New React Project
Open a shell inside the **frontend** container:

```bash
docker-compose exec frontend bash
```

Inside the container, initialize a new React project:

```bash
npx create-react-app .
```

This will create the React project in the `/app` directory inside the container.  
The files will appear locally in your `./app-code/frontend` folder.

---

### 6. Start Coding 
Edit the files locally in the `./app-code` directory.  
The development servers inside the containers will **automatically detect changes** and **reload**.

---

## Access the Applications

- React App → [http://localhost:3000](http://localhost:3000)  
- Spring Boot API → [http://localhost:8080](http://localhost:8080)  

---
