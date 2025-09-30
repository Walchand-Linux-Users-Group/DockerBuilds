# Docker Image: `ml-env`

## Description

This Dockerfile provides a **portable, lightweight environment for Data Analysis and Machine Learning development**.  
It includes Python, JupyterLab, and essential ML/Data Science libraries to allow you to analyze data, build machine learning models, and visualize results without installing packages on your host system.

---

## Getting Started

### Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.

---

## Building the Image

Navigate to the directory where your `Dockerfile-ml` is located and run:

```
docker build -t ml-env -f Dockerfile-ml .
```

Running the Docker Image
To start a container with your current folder mounted and JupyterLab exposed:

```
docker run -it -p 8888:8888 -v ${PWD}:/workspace ml-env
```

Then open the URL shown in the terminal (usually http://127.0.0.1:8888) in your browser.

## Features

- **Preinstalled Libraries:** Includes numpy, pandas, matplotlib, seaborn, scikit-learn, scipy, and jupyterlab.

- **Portable Development:** All dependencies are inside the container; no need to install Python packages on your host.

- **JupyterLab Ready:** Launch JupyterLab directly from the container for interactive coding and experimentation.

- **Lightweight:** Designed to be small (~1 GB) while providing all essential tools for Data Analysis and ML.

- **Mount Host Directory:** You can mount any local folder into /workspace to work with your files inside the container.

Example of running a sample script inside the container:

```
docker run -it -v ${PWD}:/workspace ml-env python /workspace/my_script.py
```

## Exit Status for Docker Build

**0** = Docker image was built successfully without any errors.

**1** = Build failed due to an error in the Dockerfile or build context.
