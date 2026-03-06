# 📋 Gestor de Tareas

Aplicación web para la gestión dinámica de tareas, desarrollada como proyecto final de la Unidad de **Desarrollo Web en Entorno Cliente** del ciclo formativo **DAW (Desarrollo de Aplicaciones Web)**.

---

## Autor

**Esteban Ospina Orozco**  
Ciclo Formativo de Grado Superior — DAW  
Módulo: Desarrollo Web en Entorno Cliente

---

## Descripción

Aplicación web interactiva que permite al usuario gestionar una lista de tareas de forma dinámica, sin necesidad de recargar la página. Toda la lógica de manipulación del DOM y gestión de eventos está implementada en JavaScript vanilla.

---

## Funcionalidades

- **Añadir tareas** mediante un campo de texto y un botón, o pulsando `Enter`
- **Marcar tareas como completadas** haciendo clic en el botón de confirmación o sobre el texto de la tarea
- **Eliminar tareas** individualmente con el botón de eliminación
- **Mensaje de lista vacía** cuando no hay tareas pendientes
- **Diseño responsive** adaptado a dispositivos móviles y de escritorio

---

## Estructura del Proyecto

```
gestion-tareas-proyectos/
├── index.html       # Estructura HTML de la aplicación
├── style.css        # Estilos y diseño visual
├── script.js        # Lógica JavaScript y manipulación del DOM
└── README.md        # Documentación del proyecto
```

---

## Tecnologías Utilizadas

| Tecnología      | Uso                                       |
| --------------- | ----------------------------------------- |
| HTML5           | Estructura semántica de la interfaz       |
| CSS3            | Estilos, animaciones y diseño responsive  |
| JavaScript ES6+ | Manipulación del DOM y gestión de eventos |

---

## Decisiones Técnicas

### Manipulación del DOM

- Los selectores de elementos (`getElementById`) se almacenan en variables al inicio del script para **evitar búsquedas repetidas** en el DOM y mejorar el rendimiento.
- Se utiliza `textContent` en lugar de `innerHTML` para asignar el texto de las tareas, previniendo posibles inyecciones de HTML malicioso (XSS).

### Gestión de Eventos

- Se usa `addEventListener` en lugar de atributos `onclick` inline, siguiendo las buenas prácticas de separación entre HTML y JavaScript.
- El input responde tanto al clic del botón como a la tecla `Enter`, mejorando la experiencia de usuario.

### Arquitectura del Código

- El código está organizado en funciones con **responsabilidad única**: cada función hace una sola cosa.
- `crearElementoTarea()` construye el elemento `<li>` completo y lo devuelve, sin acoplarse al resto de la lógica.
- `toggleCompletada()` delega el cambio visual al CSS mediante clases, manteniendo una separación clara entre lógica (JS) y presentación (CSS).

### CSS

- Se utilizan **variables CSS** (custom properties) en `:root` para centralizar la paleta de colores y facilitar futuros cambios de tema.
- Las animaciones de entrada de cada tarea se gestionan íntegramente con CSS (`@keyframes`), sin coste adicional en JavaScript.

---

## Cómo Ejecutar el Proyecto

1. descarga el archivo.zip
2. Abre el archivo `index.html` en cualquier navegador moderno (Chrome, Firefox, Safari, Edge)
3. No requiere servidor ni dependencias externas

---
