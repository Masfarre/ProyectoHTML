# CryptoVision - Proyecto de Criptomonedas

CryptoVision es una plataforma diseñada para ofrecer una experiencia interactiva sobre el mundo de las criptomonedas. Este proyecto permite visualizar la información más reciente de las criptomonedas, sus precios, tendencias y otras métricas clave. Además, permite a los usuarios dejar reseñas y testimonios sobre la plataforma.

## Descripción

En CryptoVision, los usuarios pueden:
- Ver las criptomonedas más populares con sus precios actualizados en tiempo real.
- Estar al tanto de las noticias más recientes sobre criptomonedas.
- Dejar reseñas sobre su experiencia con la plataforma.
- Cambiar entre un tema claro y oscuro para una experiencia personalizada.

El diseño sigue buenas prácticas de accesibilidad y está basado en la metodología **BEM** para una estructura de clases ordenada y fácil de mantener.

## Tecnologías utilizadas

- **HTML5**: Estructura semántica del contenido utilizando etiquetas como `<section>`, `<article>`, `<form>`, etc.
- **CSS3**: Estilos flexibles y adaptativos con transiciones suaves entre el modo claro y oscuro. Uso de variables CSS para mejorar la personalización del diseño.
- **JavaScript**: Funcionalidades dinámicas, como la actualización automática de datos de criptomonedas, cambio de tema (modo claro/oscuro) y el manejo de formularios.

## Funcionalidades

### 1. **Visualización de Criptomonedas**
   - Utiliza JavaScript para obtener los datos más recientes de las criptomonedas y presentarlos en una tabla.
   - La tabla de criptomonedas se actualiza cada 20 segundos utilizando un `setInterval()` que obtiene los datos de una API externa.
   
### 2. **Modo Claro/Oscuro**
   - Implementación de un tema claro y oscuro utilizando un `localStorage` que guarda la preferencia del usuario. Los estilos se ajustan dinámicamente con JavaScript al hacer clic en un ícono de "tema" en el encabezado.
   
### 3. **Formulario de Reseñas**
   - Los usuarios pueden dejar sus reseñas y comentarios a través de un formulario sencillo. La funcionalidad de enviar reseñas se maneja con JavaScript, y se muestra una lista de reseñas anteriores en la misma página.
   
### 4. **Noticias en Tiempo Real**
   - La sección de noticias se actualiza automáticamente para mostrar los artículos más recientes sobre criptomonedas. Se utiliza un simple `fetch` en JavaScript para traer los datos de las noticias de una API externa.

## Instrucciones para visualizar el proyecto

1. **Clonar el repositorio**:

   Para descargar el proyecto, puedes usar Git:

   ```bash
   git clone https://github.com/tu-usuario/cryptovision.git   
   ```

   ## Instrucciones para visualizar el proyecto

### Abrir los archivos en el navegador

Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador preferido.

```bash
cd cryptovision
open index.html
```

## Requisitos previos

Asegúrate de tener una conexión a internet activa, ya que el proyecto obtiene datos de criptomonedas y noticias en tiempo real desde APIs externas.

## Instalación de dependencias (si fuera necesario)

Este proyecto no requiere dependencias adicionales para su funcionamiento básico. Los scripts de JavaScript y los estilos están incluidos en los archivos `index.html` y `styles.css`.

## Ver en diferentes dispositivos

El proyecto está diseñado con un enfoque responsivo, lo que significa que se ajusta a diferentes tamaños de pantalla. Puedes visualizar el sitio en dispositivos móviles, tabletas y escritorios para obtener la mejor experiencia de usuario.

## Instrucciones de uso

### Cambio de Tema

En la parte superior derecha de la página, encontrarás un ícono para alternar entre el modo claro y el modo oscuro. El estado del tema se guarda en `localStorage`, por lo que se mantiene la preferencia del usuario entre sesiones.

### Visualización de Criptomonedas

Los datos de las criptomonedas se actualizan automáticamente cada 20 segundos sin necesidad de recargar la página. Esto asegura que la información presentada esté siempre actualizada.

### Envío de Reseñas

Los usuarios pueden enviar una reseña sobre su experiencia utilizando el formulario. Las reseñas se almacenan temporalmente en el navegador y se muestran debajo del formulario en una sección de testimonios.

### Visualización de Noticias

La sección de noticias se actualiza dinámicamente, trayendo las últimas novedades sobre criptomonedas cada vez que se cargue la página.

## Detalles importantes

### JavaScript

#### Cambio de Tema

El cambio de tema entre modo claro y oscuro se maneja con JavaScript. Al hacer clic en el ícono del tema, se activa la función `toggleTheme()`, que agrega o elimina la clase `dark-mode` del `<body>` y actualiza el `localStorage` para recordar la preferencia del usuario.



### Todo comprobado en la W3C y sin ningun error 

   
