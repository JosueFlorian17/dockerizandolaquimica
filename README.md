# 🧪 Dockerizándola Química

Una imagen Docker lista para usar que contiene herramientas de química computacional modernas como **GROMACS**, **AutoDock Vina** y **MDAnalysis**, pensada para facilitar el trabajo de simulaciones moleculares sin complicaciones de instalación.

> 🎯 Objetivo: permitir que cualquier químico o bioinformático pueda correr simulaciones en segundos, con la opción de personalizar su entorno si lo desea.

---

## 🚀 Imagen base

La imagen incluye:

| Herramienta         | Versión    |
|---------------------|------------|
| GROMACS             | 2022       |
| AutoDock Vina       | 1.7.2      |
| MDAnalysis          | Última     |
| Python, pip, etc.   | Compatibles con los anteriores |

---

## 🐳 Cómo usar

### ✅ Opción rápida (todo listo)

```
docker pull TUUSUARIO/dockerizandolaquimica
docker run -it TUUSUARIO/dockerizandolaquimica bash
```

## ⚙️ Personalización

### ¿Deseas versiones específicas o más herramientas (ej. OpenMM, PyMOL, RDKit)?

👉 Usa nuestro generador web:
🔧 Personaliza tu imagen Docker

Este generador te permite:

- Elegir versiones de GROMACS, Vina, MDAnalysis

- Añadir herramientas opcionales

- Descargar un Dockerfile personalizado

## 📂 Volúmenes y archivos de entrada

### Puedes montar tu carpeta local para trabajar con tus archivos:

```
docker run -it -v $(pwd):/workspace TUUSUARIO/dockerizandolaquimica bash
cd /workspace
```

## 🛠 Roadmap

- Imagen Docker lista para usar

- Generador web de Dockerfiles personalizados

## 🤝 Contribuciones

### ¿Eres químico computacional o bioinformático y quieres contribuir?

¡Eres bienvenido!
Puedes aportar ideas, ejemplos, mejoras o abrir issues en el repositorio:

👉 github.com/tuusuario/dockerizandolaquimica
📢 Créditos y contacto

Creado por [usuario]
💌 Contacto: [usuario]
🐙 GitHub: @usuario


