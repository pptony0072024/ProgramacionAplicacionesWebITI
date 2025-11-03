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

// Uso de promesas
obtenerDatos()
  .then(resultado => console.log("Datos recibidos:", resultado))
  .catch(error => console.error("Ocurrió un error:", error));
