# Docker Image: `nmap-security-tools`

## Description

This Dockerfile is designed to provide a portable, lightweight environment to use **Nmap**. It allows you to run Nmap directly within a container, making it ideal for network scanning, security assessments, and system administration tasks without needing to install Nmap on the host system.


## Getting Started

### Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.

## Building the Image

To build the Docker image, navigate to the directory where your `Dockerfile` is located and run the following command:

```
sudo docker build -t nmap-security-tools .
```

## Running the Docker Image

To run the Docker image, use the following command:

```
sudo docker run nmap-security-tools <target_ip>
```

## Features

- **Easy Deployment:** With Docker, you can quickly deploy this Nmap tool on various platforms, including cloud environments, for easy and scalable security auditing.
- **No Unnecessary Packages:** The image only installs Nmap without any other optional packages 
- **Customizable Scanning:** You can pass any Nmap command or argument directly to the container at runtime. For example: `To perform a simple ping scan.`
    ```
    docker run nmap-security-tools -sP 192.168.1.0/24
    ```

---

## Exit Status for Docker Build

`0` = Docker image was built successfully without any errors.

`1` = Build failed due to an error in the Dockerfile or build context.
