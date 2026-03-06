// ============================================================
// GESTOR DE TAREAS — script.js
// ============================================================

// --- 1. REFERENCIAS AL DOM ---
// elementos que vamos a usar 
const inputTarea    = document.getElementById('input-tarea');
const btnAgregar    = document.getElementById('btn-agregar');
const listaTareas   = document.getElementById('lista-tareas');

// --- 2. FUNCIÓN PRINCIPAL: AÑADIR TAREA ---
/**
 * Lee el texto del input, crea un elemento <li> con todos sus controles
 * y lo inserta en la lista. Finalmente limpia el input.
 */
function agregarTarea() {
  
  const textoTarea = inputTarea.value.trim();

  // Validación: no se permite añadir tareas vacías
  if (textoTarea === '') {
    inputTarea.focus(); // Devolvemos el foco al input para que el usuario sepa dónde escribir
    return;             
  }

  // Ocultamos el mensaje de lista vacía si estaba visible
  eliminarMensajeVacio();

  // Creamos el elemento <li> que representará la tarea
  const itemTarea = crearElementoTarea(textoTarea);

  // Lo añadimos al principio de la lista (las tareas nuevas aparecen arriba)
  listaTareas.prepend(itemTarea);

  // Limpiamos el campo de entrada y devolvemos el foco
  inputTarea.value = '';
  inputTarea.focus();
}

// --- 3. FUNCIÓN: CREAR ELEMENTO DE TAREA ---
/**
 * Construye y devuelve un <li> completo con:
 * - El texto de la tarea
 * - Botón para marcar como completada
 * - Botón para eliminar
 *
 * @param {string} texto - El texto de la tarea a mostrar
 * @returns {HTMLLIElement} El elemento <li> listo para insertar en el DOM
 */
function crearElementoTarea(texto) {
  // --- Contenedor principal de la tarea ---
  const li = document.createElement('li');
  li.classList.add('tarea-item');

  // --- Texto de la tarea ---
  const spanTexto = document.createElement('span');
  spanTexto.classList.add('tarea-texto');
  spanTexto.textContent = texto;

  // Al hacer clic sobre el texto también se alterna el estado completado
  spanTexto.addEventListener('click', () => toggleCompletada(li));

  // --- Botón: marcar como completada ---
  const btnCompletar = document.createElement('button');
  btnCompletar.classList.add('btn-accion', 'btn-completar');
  btnCompletar.textContent = '✓';
  btnCompletar.setAttribute('aria-label', 'Marcar como completada');
  btnCompletar.addEventListener('click', () => toggleCompletada(li));

  // --- Botón: eliminar tarea ---
  const btnEliminar = document.createElement('button');
  btnEliminar.classList.add('btn-accion', 'btn-eliminar');
  btnEliminar.textContent = '✕';
  btnEliminar.setAttribute('aria-label', 'Eliminar tarea');
  btnEliminar.addEventListener('click', () => eliminarTarea(li));

  // --- Ensamblamos el <li> con todos sus hijos ---
  li.appendChild(spanTexto);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);

  return li;
}

// --- 4. FUNCIÓN: ALTERNAR ESTADO COMPLETADO ---
/**
 * Añade o quita la clase CSS 'completada' en el elemento <li>.
 *
 * @param {HTMLLIElement} itemLi - El elemento <li> de la tarea
 */
function toggleCompletada(itemLi) {
  itemLi.classList.toggle('completada');
}

// --- 5. FUNCIÓN: ELIMINAR TAREA ---
/**
 * Elimina el elemento <li> del DOM.
 * Tras eliminar, comprueba si la lista quedó vacía para mostrar el mensaje.
 *
 * @param {HTMLLIElement} itemLi - El elemento <li> de la tarea a eliminar
 */
function eliminarTarea(itemLi) {
  itemLi.remove();

  // Si no quedan tareas, mostramos el mensaje de lista vacía
  if (listaTareas.children.length === 0) {
    mostrarMensajeVacio();
  }
}

// --- 6. FUNCIONES: MENSAJE DE LISTA VACÍA ---
/**
 * Crea e inserta un párrafo de aviso cuando no hay tareas.
 */
function mostrarMensajeVacio() {
  // Evitamos duplicar el mensaje si ya existe
  if (document.getElementById('msg-vacio')) return;

  const p = document.createElement('p');
  p.id = 'msg-vacio';
  p.classList.add('lista-vacia');
  p.textContent = '— SIN TAREAS PENDIENTES —';
  listaTareas.appendChild(p);
}

/**
 * Elimina el mensaje de lista vacía si existe.
 */
function eliminarMensajeVacio() {
  const msg = document.getElementById('msg-vacio');
  if (msg) msg.remove();
}

// --- 7. EVENTOS ---
// Clic en el botón "AÑADIR"
btnAgregar.addEventListener('click', agregarTarea);

// Pulsar Enter en el input también añade la tarea
inputTarea.addEventListener('keydown', function(evento) {
  if (evento.key === 'Enter') {
    agregarTarea();
  }
});

// --- 8. INICIALIZACIÓN ---
// Al cargar la página mostramos el mensaje de lista vacía por defecto
mostrarMensajeVacio();