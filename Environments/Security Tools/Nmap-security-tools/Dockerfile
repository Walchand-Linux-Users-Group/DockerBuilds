
FROM debian:stable-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends nmap && apt-get clean && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["nmap"]
