/*---------------*/
// 1. REQUISITOS
/*---------------*/

// 1.1 Petición de funcionalidad (reunión 1-2h con jefe de negocio, de servicios, product owner o project manager)
// Tip: Apuntar todo en la reunión

// -> Necesitamos una web para almacenar las tareas de los usuarios. APPI, tematización ...

// 1.2 Traducir a funcionalidades de HTML, JS, partes de la aplicación
// - Input con el nombre de tarea
// - Botón para agregar tarea
// - Listado de tareas
// - Botón eliminar tareas
// - Botón eliminar tareas individuales

// 1.3 Definir acciones de usuario
// - Agregar tarea
// - Eliminar (tarea o tareas)

// 1.4 Definir resultado a mostrar (API + acciones usuario -> output)
// - Lista de tareas


/*---------------*/
// 2. PLANIFICACIÓN
/*---------------*/

// 2.1 Hitos de la aplicación
// - Crear un HTML estático
// - Montar la base de JS -> estructura & pseudocódigo
// - Rellenar los pasos de las diferentes partes del JS
// - Linkar & debugar JS+HTML
// - Mejorar maquetación

//2.2 Tareas concretas -> ganar focus
// C1 [HTML] Implementar bootstrap + crear input + button bootstrap + dejar espacio para el listado <ul> [1h]
// -> C2 [JS] Definir las variables que necesitará el programa
// - C3 [JS] Definir todas las funciones vacías de javascript
// - C4 [JS] Rellenar lógica de funciones: una a una!! -> probar -> siguiente
// - C5 [HTML] Mejorar interficie

//Variables
var input = document.getElementById("userInput");
var enterButton = document.getElementById("button");
var ul = document.querySelector("ul");