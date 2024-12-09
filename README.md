
---

# Mi Portafolio Web

Este es mi portafolio personal desarrollado en **Angular 18**, donde muestro mis proyectos más destacados, habilidades y una breve biografía. He utilizado tecnologías como **Tailwind CSS** para el diseño y **Angular** para la estructura de la página.

## 🚀 Características

- **Proyectos destacados** con enlaces a repositorios.
- **Sección de habilidades** (técnicas y blandas).
- **Formulario de contacto interactivo**.
- **Diseño moderno y responsivo** con Tailwind CSS.

---
## 📦 Instalación

Sigue estos pasos para clonar, configurar e instalar el proyecto:

### 1. Clonar el Repositorio

Primero, necesitas clonar el repositorio en tu máquina local. Abre tu terminal y ejecuta:

```bash
git clone https://github.com/FernandoChav/Tarea_2
```

### 2. Instalar las Dependencias

Entra en la carpeta del proyecto que acabas de clonar y ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
cd Tarea_2
npm install
```

Este comando descargará todas las dependencias listadas en el archivo `package.json`.

---

### 3. Instalar Flowbite y Configuración

**Flowbite** es un componente adicional que se utiliza para crear elementos interactivos con Tailwind CSS. Para instalarlo y configurarlo correctamente, sigue estos pasos:

1. **Instalar Flowbite y Tailwind**

   Ejecuta el siguiente comando para instalar **Flowbite**:

   ```bash
   npm install flowbite
   npm install tailwindcss --save-dev
   ```

2. **Configurar Tailwind CSS para Flowbite**

   Abre el archivo `tailwind.config.js` en la raíz del proyecto y agrega **Flowbite** como un plugin:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{html,ts}",
       "./node_modules/flowbite/**/*.js"
     ],
     theme: {
       extend: {},
     },
     plugins: [
       require('flowbite/plugin')
     ],
   }
   ```

   Esto asegurará que **Flowbite** pueda ser usado correctamente dentro de la configuración de **Tailwind CSS**.


---

### 4. Ejecutar el Proyecto

Una vez que las dependencias estén instaladas y Flowbite configurado correctamente, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
ng serve
```

Esto levantará la aplicación en tu servidor local. Abre tu navegador y accede a [http://localhost:4200](http://localhost:4200) para ver tu portafolio en vivo.


---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **Angular 18**: Framework para construir la aplicación de una sola página (SPA).
- **Tailwind CSS**: Framework de CSS para diseño moderno y responsivo.
- **Figma**: Para el diseño visual del portafolio.

---


## ⚙️ Dependencias

Este proyecto requiere las siguientes dependencias para funcionar correctamente:

- **Angular 18**
- **Tailwind CSS**
- **Node.js**: Se necesita tener **Node.js** instalado para poder ejecutar los comandos de instalación y servir la aplicación. Puedes descargarlo desde [aquí](https://nodejs.org).

---

