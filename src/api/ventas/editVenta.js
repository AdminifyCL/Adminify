// Dependencias.

// Definición...
const editVentas = async () => {
  console.log("[] API HANDLER: editVentas");
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
export default editVentas;
