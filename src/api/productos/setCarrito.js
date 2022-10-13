// Dependencias.

// Definición...
const setCarrito = async () => {
  console.log("[] API HANDLER: setCarrito");
  return new Promise(async (resolve, reject) => {
    try {
      resolve({});
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default setCarrito;
