# Use the official Jupyter base image with Python 3.11
FROM jupyter/scipy-notebook:latest

# Set the working directory
WORKDIR /home/user/work

# Switch to root to install system packages
USER root

# Install additional system packages if needed
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Switch back to user user
USER user

# Install additional Python packages
COPY requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt

# Create directories for notebooks and data
RUN mkdir -p /home/user/work/notebooks \
    && mkdir -p /home/user/work/data \
    && mkdir -p /home/user/work/scripts

# Expose the Jupyter Lab port
EXPOSE 8888

# Set environment variables
ENV JUPYTER_ENABLE_LAB=yes
ENV JUPYTER_TOKEN=""

# Start Jupyter Lab
CMD ["start-notebook.sh", "--NotebookApp.token=''", "--NotebookApp.password=''"]