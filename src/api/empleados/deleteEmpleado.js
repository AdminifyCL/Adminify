// Dependencias.

// Definición...
const deleteEmpleado = async () => {
  console.log("[] API HANDLER: deleteEmpleado");
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
export default deleteEmpleado;
