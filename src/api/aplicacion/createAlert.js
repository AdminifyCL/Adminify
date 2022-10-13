// Dependencias.

// Definición...
const createAlert = async (data) => {
  console.log("[] API HANDLER: createAlert");
  return new Promise(async (resolve, reject) => {
    try {
      // Definición de la alerta.
      resolve(data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default createAlert;
