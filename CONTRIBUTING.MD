# Contributing to Docker Environment Repository

## Description

This file provides guidelines and instructions on how to contribute a new Dockerfile to the repository.

---

## For Contribution

Create your own docker environment based on the supported environments in [`README.md`](/Docker-Environment-Repository/README.md), make the required changes to [`DESC.md`](/Docker-Environment-Repository/DESC.md) and add it to each environment you create. *Let's Dockerise*🐳

---

## Syntax for Dockerfile

The `Dockerfile` is a text file that contains all the instructions necessary to build a Docker image. Below is a basic syntax for creating a `Dockerfile`:

```Dockerfile
# Use an official base image
FROM <base-image>

# Set the working directory inside the container
WORKDIR /app

# Copy the application code into the container
COPY . .

# Install dependencies
RUN <install-command>

# Expose the port the app runs on
EXPOSE <port-number>

# Command to run the application
CMD ["<command-to-run-app>"]



```

---

### Naming Convention for Docker Images

---

**NOTE:** For better understaning, name the docker image as:

`<project-name>-<service-or-framework>-<environment>:<version>`

`<project-name>`: The name of the project or service.

`<service-or-framework>`: The primary tool or framework used.

`<environment>` (optional): Whether the image is for development, production, etc.

`<version>`: A version number or tag (e.g., latest, 1.0).
