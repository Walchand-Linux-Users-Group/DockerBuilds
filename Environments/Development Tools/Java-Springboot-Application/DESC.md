# Docker Image: Springboot-App

## Description

This Dockerfile is designed for **Development Tools** such as building a simple Spring Boot-based application that is fully Dockerized, allowing you to develop, build, and run the application without needing to install dependencies on your local machine. The application structure is automatically generated using `curl` to download a Spring Boot template from the Spring Initializr API. Maven is used for dependency management and building the project inside the Docker container. The setup also includes the installation of Maven plugins and supports running and packaging the application entirely within a containerized environment. 

The setup also includes the installation of VS Code Server to seamlessly connect it with local instance of VS Code using [`Remote Explorer`](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) Extension. The setup also leverages Docker Named Volumes which can be created to persist the code even after container is stopped or removed.

The goal is to create a Spring Boot application with zero local setup, relying entirely on Docker for development, including dependency and plugin management.

## Getting Started

### Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.
- Basic understanding of Docker and Spring Boot.
- No Java/Maven setup required on your local machine

## Building the Image

To build the Docker image, navigate to the directory where your `Dockerfile` is located and run the following command:

```
docker build -t <image-name> <path-to-directory>
```
This command builds an image with default configurations.

We can use  `--build-arg` flag with build command for custom configurations. Currently, default configurations are:
- `name`=app
- `version`=3.2.0
- `dependencies`=web,jpa,h2 _(without spaces)_
###

To build the Docker image with custom configuration, run the following command:
```
docker build -t 
    --build-arg name=<name-of-application> 
    --build-arg version=<required-maven-version> 
    --build-arg dependencies=<dependencies-comma-separated-without-spaces> 
    <image-name> <path-to-directory>
```

## Creating the Docker Named Volume

To create a Docker named volume, which will persist the code even after container is stopped or removed, run the following command:
```
docker volume create <volume-name>
```

## Running the Docker Image

To run the Docker image, use the following command:

```
docker run 
    -v <volume-name>:/usr/src/<name-of-application>  
    -p <local-port>:8080
    [OPTIONS]
    <image-name>
```
- `-v <volume-name>:/usr/src/<name-of-application>` : This mounts the named volume to working directory inside the container. Any changes to the file in working directory inside the container will persist in the Docker Volume.
- `-p <local-port>:8080` : This mounts the `local-port` selected to Docker port `8080`.

## Stopping and Restarting the Container
To stop the container:
```
docker stop <container-name-or-id>
```

###
To restart the container:
```
docker start <container-name-or-id>
```

## Features

- **No dependencies required locally**: Everything is managed inside Docker.
- **Docker Volume**: Named Docker volume to persist application data across sessions.
- **Customization**: Can change the Spring Boot application name, version, dependencies, or plugins by using `--build-arg`.
- **VS Code IDE Support**: Connects to local VS Code IDE Instance to seamlessly code inside the container.

---

## Exit Status for Docker Build

`0` = Docker image was built successfully without any errors.

`1` = Build failed due to an error in the Dockerfile or build context.
