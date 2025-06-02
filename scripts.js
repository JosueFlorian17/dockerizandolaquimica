function generateDockerfile() {
    const gromacsVersion = document.getElementById('gromacs').value;
    const vinaVersion = document.getElementById('vina').value;
    const mdaVersion = document.getElementById('mdanalysis').value;
  
    const dockerfile = `
  FROM ubuntu:22.04
  
  # Instalar dependencias básicas
  RUN apt-get update && apt-get install -y \\
      build-essential \\
      cmake \\
      wget \\
      python3 \\
      python3-pip \\
      git
  
  # Instalar GROMACS ${gromacsVersion}
  RUN wget -qO- https://ftp.gromacs.org/gromacs/gromacs-${gromacsVersion}.tar.gz | tar xz \\
      && cd gromacs-${gromacsVersion} \\
      && mkdir build && cd build \\
      && cmake .. -DGMX_BUILD_OWN_FFTW=ON -DREGRESSIONTEST_DOWNLOAD=ON \\
      && make -j$(nproc) \\
      && make install
  
  # Instalar AutoDock Vina ${vinaVersion}
  RUN wget https://github.com/ccsb-scripps/AutoDock-Vina/releases/download/v${vinaVersion}/vina_${vinaVersion}_linux_x86_64.tar.gz \\
      && tar -xzf vina_${vinaVersion}_linux_x86_64.tar.gz \\
      && mv vina /usr/local/bin/
  
  # Instalar MDAnalysis ${mdaVersion}
  RUN pip3 install MDAnalysis==${mdaVersion}
  
  CMD ["/bin/bash"]
  `;
  
    document.getElementById('dockerfile').textContent = dockerfile.trim();
  }
  
  function copyToClipboard() {
    const text = document.getElementById("dockerfile").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("¡Dockerfile copiado al portapapeles!");
    });
  }
  