FROM kalilinux/kali-rolling

# Update the package sources to use a different mirror
RUN sed -i 's/http:\/\/kali.download\/kali/http:\/\/http.kali.org\/kali/g' /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    nmap \
    metasploit-framework \
    burpsuite \
    wireshark \
    aircrack-ng \
    john \
    hydra \
    sqlmap \
    gobuster \
    nikto \
    net-tools \
    curl \
    wget && \
    apt-get clean && rm -rf /var/lib/apt/lists/*


WORKDIR /app

EXPOSE 3000

CMD ["bash"]
