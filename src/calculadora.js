function sumar(a, b) {
  // Simulación de código simple
  return a + b ;
}

function restar(a, b) {
  // Simulación de código simple
  return a - b;
}

function multiplicar(a, b) {
  // Simulación de código simple
  return a * b;
}


// Exportamos las funciones que queremos que sean "públicas"
// para que los tests (y otras partes de la app) puedan usarlas.
// ¡No olvidar añadir la nueva función aquí!
module.exports = { sumar, restar, multiplicar };