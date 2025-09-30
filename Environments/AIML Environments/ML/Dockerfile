# Lightweight Python base
FROM python:3.11-slim

# Prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# System dependencies
RUN apt-get update && apt-get install -y \
    git wget curl build-essential \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip
RUN pip install --upgrade pip

# Install data analysis & ML libraries
RUN pip install \
    numpy pandas matplotlib seaborn scikit-learn scipy jupyterlab notebook

# Set working directory
WORKDIR /workspace

# Expose Jupyter port
EXPOSE 8888

# Default command: start JupyterLab
CMD ["jupyter", "lab", "--ip=0.0.0.0", "--allow-root", "--no-browser"]
