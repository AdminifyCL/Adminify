// Dependencias.

// Definición...
const deleteVenta = async () => {
  console.log("[] API HANDLER: deleteVenta");
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
export default deleteVenta;
