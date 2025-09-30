# Jupyter Lab Docker Setup

This directory contains a complete Docker setup for running Jupyter Lab with a comprehensive data science and machine learning environment.

## What's Included

- **Jupyter Lab** - Latest version with lab interface
- **Python 3.11** - Latest stable Python version
- **Data Science Libraries**:
  - NumPy, Pandas, Matplotlib, Seaborn, Plotly
  - Scikit-learn, TensorFlow, PyTorch
  - Scipy, Bokeh, Altair
- **Development Tools**:
  - Git, Jupyter extensions
  - Black formatter, Flake8 linter, Pytest
- **Utilities**: Requests, BeautifulSoup, Excel support

## Quick Start

### Using Docker Compose (Recommended)

1. **Start Jupyter Lab**:
   ```bash
   docker-compose up -d
   ```

2. **Access Jupyter Lab**:
   Open your browser and go to: http://localhost:8888

3. **Stop the service**:
   ```bash
   docker-compose down
   ```

### Using Docker directly

1. **Build the image**:
   ```bash
   docker build -t jupyter-lab-ml .
   ```

2. **Run the container**:
   ```bash
   docker run -p 8888:8888 -v $(pwd)/notebooks:/home/user/work/notebooks jupyter-lab-ml
   ```

## Directory Structure

```
Python-ML-Development/
├── Dockerfile              # Docker image definition
├── docker-compose.yml      # Docker Compose configuration
├── requirements.txt        # Python package dependencies
├── README.md               # This file
├── notebooks/              # Your Jupyter notebooks (mounted volume)
├── data/                   # Data files (mounted volume)
└── scripts/                # Python scripts (mounted volume)
```

## Features

- **No Authentication**: Set up for development use (no token/password required)
- **Persistent Storage**: Your notebooks, data, and scripts are saved on your host machine
- **Auto-restart**: Container restarts automatically unless stopped manually
- **Full Lab Interface**: Modern Jupyter Lab interface with extensions
- **Git Integration**: Git is pre-installed for version control

## Security Note

This setup is configured for development use with no authentication. Do not expose this to the internet or use in production without proper security measures.

## Customization

- **Add packages**: Edit `requirements.txt` and rebuild the image
- **Change port**: Modify the port mapping in `docker-compose.yml`
- **Add system packages**: Edit the `Dockerfile` to install additional system dependencies

## Troubleshooting

- **Port already in use**: Change the port in `docker-compose.yml` from `8888:8888` to `8889:8888`
- **Permission issues**: Make sure Docker has access to the project directory
- **Container won't start**: Check logs with `docker-compose logs jupyter-lab`