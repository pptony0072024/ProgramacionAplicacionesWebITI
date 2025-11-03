function obtenerDatos() {
  return new Promise((resolve, reject) => {
    console.log("Obteniendo datos...");
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve({ usuario: "Ana", edad: 25 });
      } else {
        reject("Error al obtener los datos");
      }
    }, 2000);
  });
}

// Uso con async/await
async function mostrarDatos() {
  try {
    const resultado = await obtenerDatos();
    console.log("Datos recibidos:", resultado);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

mostrarDatos();
