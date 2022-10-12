// Dependencias.

// Definición...
const createEmpleado = async () => {
  console.log("[] API HANDLER: createEmpleado");
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
export default createEmpleado;
