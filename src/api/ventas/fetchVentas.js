// Dependencias.

// Definición...
const fetchVentas = async () => {
  console.log("[] API HANDLER: fetchVentas");
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
export default fetchVentas;
