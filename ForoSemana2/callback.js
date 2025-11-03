// Simulación de una operación asincrónica con callback
function obtenerDatos(callback) {
  console.log("Obteniendo datos...");
  setTimeout(() => {
    const datos = { usuario: "Ana", edad: 25 };
    callback(null, datos); // primer parámetro: error (null si no hay)
  }, 2000);
}

// Llamada con callback
obtenerDatos((error, resultado) => {
  if (error) {
    console.error("Ocurrió un error:", error);
  } else {
    console.log("Datos recibidos:", resultado);
  }
});
