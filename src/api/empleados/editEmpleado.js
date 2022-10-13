// Dependencias.

// Definición...
const editEmpleado = async () => {
  console.log("[] API HANDLER: editEmpleado");
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
export default editEmpleado;
