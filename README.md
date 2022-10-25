<h1 align="center">
  <span><img width="20" src="./public/adminify.svg"/></span>
  Adminify
</h1>

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Introducción

Adminify, es un sistema de caja moderno con un fuerte comunicación entre la gestión de inventario y empleados.

La aplicación utiliza Rust internamente para montar la aplicación de escritorio, haciendo uso de el Framework Tauri. Mientras que, para el apartado visual se usan tecnologias como React y Redux.

## Instalación

Antes de comenzar a instalar las dependencias del proyecto es necesario instalar las dependencias de Tauri:

En el caso de Windows:

- Microsoft Visual Studio C++ Build Tools.
- WebView2.
- Rust.

Para más información, se puede consultar la misma documentación de [Tauri](https://tauri.studio/v1/guides/getting-started/prerequisites).

Por otro lado, se recomienda la instalación de **Node** y **Git**, para un desarrollo más optimo.

- Node v18.2.0
- Git v2.36.1

## Dependencias

Para instalar las dependencias del proyecto se recomienda el uso de **yarn** por sobre **npm**.

Para clonar el repositorio:

```bash
  # Opción 1: Mediante SSH
  $git clone git@github.com:PayAdmin/payadmin-desktop.git

  # Opción 2: Mediante HTTPS
  $git clone https://github.com/PayAdmin/payadmin-desktop.git
```

Para instalar **YARN**:

```bash
  # Instalación global de YARN.
  $npm install -g yarn
```

Para instalar las dependencias del proyecto.

```bash
  # Instalación de las dependencias.
  $yarn install
```

## Configuración

Es necesario crear un archivo de configuraciones en el directorio _config/_. El archivo de configuraciones debe ser solicitado a alguno de los desarrolladores.

```bash
  ./src/config/config.js
```

## Ejecución

Ejecutar el proyecto en un servidor local.

```bash
  # Ejecutar en modo desarrollador.
  $yarn run serve:dev

  # Ejecutar en modo producción.
  $yarn run serve:prod
```

Compilar una versión local.

```bash
  # Compilar en modo desarrollador.
  $yarn build:dev

  # Compilar en modo producción.
  $yarn build:prod
```

Ejecutar el proyecto en tiempo real con Tauri.

```bash
  # La ejecución de Tauri apunta a localhost:8080.
  $yarn run tauri dev
```

Compilar una versión local de Tauri.

```bash
  # La compilación de tauri apunta a ./dist/.
  $yarn run tauri build
```

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Autores

- _Javier Almarza_ ([@JajoScript](https://github.com/JajoScript))
- _Gonzalo Cañas_ ([@Gonzal0-c](https://github.com/Gonzal0-c))
- _Nicolás Cruz_ ([@NickCracker](https://github.com/NickCracker))
- _Vicente Salas_ ([@Vychon](https://github.com/Vychon))
