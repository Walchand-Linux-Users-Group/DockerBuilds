# Image used is of Eclipse Temurin because OpenJDK is deprecated
FROM eclipse-temurin:21

# Set the working directory
WORKDIR /app

# Installing Maven and other tools
RUN apt-get update && apt-get install -y maven curl

# Expose the default Spring Boot port for the dev server
EXPOSE 8080

# A command to keep the container running
# The developer will use 'docker exec' to run maven commands
CMD ["tail", "-f", "/dev/null"]