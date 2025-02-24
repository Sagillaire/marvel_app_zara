# Marvel API App

Este proyecto consiste en una aplicación que interactúa con el API de Marvel. La app permite consultar información sobre personajes, cómics y eventos de Marvel utilizando la API pública proporcionada por Marvel.

Este proyecto fue desarrollado utilizando **Vite** y **TypeScript**, lo que asegura un rendimiento rápido y un desarrollo eficiente.

## Enlace de Producción

La aplicación está desplegada en producción con **Vercel** y se puede acceder desde el siguiente enlace:

[Marvel API App - Producción](https://marvel-app-zara.vercel.app/)

## Tecnologías y Dependencias

Se utilizaron las siguientes dependencias para el desarrollo del proyecto:

- **@tanstack/react-query**: Para gestionar las peticiones y la caché de datos.
- **axios**: Para realizar las solicitudes HTTP a la API de Marvel.
- **md5**: Para generar los hashes necesarios para las solicitudes a la API.
- **react**: Librería principal para la creación de interfaces de usuario.
- **react-dom**: Para el renderizado de la aplicación en el DOM.
- **react-router-dom**: Para la gestión de rutas en la aplicación.
- **styled-components**: Para la creación de estilos CSS en JavaScript de forma modular.
- **zustand**: Para el manejo del estado global de la aplicación.

## Scripts

Los siguientes scripts están disponibles para el desarrollo y la gestión del proyecto:

- `dev`: Inicia el servidor de desarrollo utilizando Vite.
- `build`: Realiza la construcción del proyecto utilizando TypeScript y Vite.
- `lint`: Ejecuta ESLint para verificar el estilo y la calidad del código.
- `preview`: Muestra una versión previa de la aplicación.
- `test`: Ejecuta las pruebas con Vitest.
- `coverage`: Ejecuta las pruebas con Vitest y genera un reporte de cobertura.

## Características del Proyecto

- **Manejo de estado global con Zustand**: Se utilizó Zustand para gestionar el estado de la aplicación de manera eficiente.
- **Testing con Vitest y Testing Library**: Se implementaron pruebas unitarias y de integración con un coverage superior al 90%.
- **Arquitectura hexagonal**: Se siguió una arquitectura hexagonal para mantener el código modular y fácilmente escalable.
- **Atomic Design**: Se aplicó el principio de Atomic Design para estructurar los componentes de manera reutilizable.
- **Buenas prácticas de programación**:
  - **SOLID**: Se aplicaron los principios SOLID para un diseño orientado a objetos limpio y mantenible.
  - **TDD**: Desarrollo guiado por pruebas (Test Driven Development).
  - **DDD**: Diseño basado en el dominio (Domain Driven Design).
  - **KISS**: Mantenibilidad del código mediante la simplicidad.
  - **DRY**: Evitar la repetición de código innecesaria.
- **Manejo de errores**: Se validó el manejo adecuado de errores y páginas de error.
- **Uso de hooks básicos de React**: `useState`, `useEffect`, `useCallback` para la gestión de estado y efectos secundarios.
- **Uso de TypeScript**: Para asegurar un desarrollo tipado y evitar errores comunes.
- **Custom hooks y utilidades**: Se crearon hooks y funciones personalizadas para manejar la lógica de negocio de manera modular.
- **Diseño responsivo**: La aplicación es completamente responsiva y se adapta a diferentes tamaños de pantalla.
- **Styled-components**: Para la creación de estilos personalizados en la aplicación utilizando la potencia de CSS en JS.

## Variables de Entorno

Asegúrate de definir las siguientes variables de entorno en tu archivo `.env`:

- `VITE_BASE_URL`: La URL base de la API de Marvel.
- `VITE_PUBLIC_KEY`: Tu clave pública de la API de Marvel.
- `VITE_PRIVATE_KEY`: Tu clave privada de la API de Marvel.

## Instalación

Para instalar y ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. **Instala las dependencias:**

   ```bash
   yarn install
   ```

## Crea un archivo .env en la raíz del proyecto y define las variables de entorno:

VITE_BASE_URL=<tu_url_base>
VITE_PUBLIC_KEY=<tu_clave_publica>
VITE_PRIVATE_KEY=<tu_clave_privada>

## Inicia la aplicación en modo desarrollo:

yarn dev

# Para generar la versión de producción:

yarn build

# Para ver la aplicación de producción de manera previa:

yarn preview

## Pruebas

# Para ejecutar las pruebas, usa el siguiente comando:

yarn test

# Para ver el reporte de cobertura:

yarn coverage
