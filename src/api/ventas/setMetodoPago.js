// Dependencias.

// Definición...
const setMetodoPago = async () => {
  console.log("[] API HANDLER: setMetodoPago");
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
export default setMetodoPago;
