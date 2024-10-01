# Docker Image: kali-linux-penetration-testing

## Description

This Docker image is designed for **penetration testing and security auditing using Kali Linux**. It allows you to **utilize a comprehensive set of tools for various security tasks, including network scanning, web application testing, password cracking, and vulnerability assessment**.

## Getting Started

### Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.

## Building the Image

To build the Docker image, navigate to the directory where your `Dockerfile` is located and run the following command:

```bash
docker build -t kali-linux-penetration-testing .
```

## Running the Docker Image

To run the Docker image, use the following command:

```
docker run -it --rm kali-linux-penetration-testing
```

## Features

- **Comprehensive Toolset:** Includes tools like Nmap, Metasploit, Burp Suite, Wireshark, Aircrack-ng, and many more for various penetration testing tasks.
- **Lightweight:** Optimized for quick setup and minimal resource usage.
- **Customizable Environment:** Easily modify the Dockerfile to add or remove tools based on your specific needs.

---

## Exit Status for Docker Build

`0` = Docker image was built successfully without any errors.

`1` = Build failed due to an error in the Dockerfile or build context.
