FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Instalar dependencias necesarias para compilar Vina
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    libboost-all-dev \
    libeigen3-dev \
    g++ \
    && apt-get clean

# Clonar el repositorio (rama develop recomendada)
WORKDIR /opt
RUN git clone --branch develop https://github.com/ccsb-scripps/AutoDock-Vina.git

# Compilar desde la ruta recomendada: build/linux/release
WORKDIR /opt/AutoDock-Vina/build/linux/release
RUN make

# Añadir el ejecutable al PATH
ENV PATH="/opt/AutoDock-Vina/build/linux/release:${PATH}"

# Comando por defecto
CMD ["/bin/bash"]
