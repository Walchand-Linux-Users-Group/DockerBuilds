# Image used is of Eclipse Temurin because OpenJDK is deprecated
FROM eclipse-temurin:21

# Define a build argument for custom directory name
ARG name=app
ARG version=3.2.0
ARG commit_id=latest
ARG dependencies=web,jpa,h2

# Working directory
WORKDIR /usr/src/${name}

# Installing Maven
RUN apt update && \
    apt-get install -y maven curl unzip

# Generate Spring Boot project with a specified version
RUN curl -sSL "https://start.spring.io/starter.zip?type=maven-project&language=java&bootVersion=${version}&baseDir=${name}&dependencies=${dependencies}" \
    --output project.zip && \
    unzip project.zip -d . && \
    rm project.zip

# Change to the generated project directory
WORKDIR /usr/src/${name}/${name}

RUN /bin/bash -c "$(curl -fsSL https://gist.githubusercontent.com/cvcore/8e187163f41a77f5271c26a870e52778/raw/download_vscode_server.sh)" -- ${commit_id}

# Expose the default Spring Boot port
EXPOSE 8080

# Package the application (Maven build)
RUN mvn clean package

# Command to run the application
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]