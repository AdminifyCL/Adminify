// Dependencias.

// Definición...
const createVenta = async () => {
  console.log("[] API HANDLER: createVenta");
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
export default createVenta;
