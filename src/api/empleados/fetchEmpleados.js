// Dependencias.

// Definición...
const fetchEmpleados = async () => {
  console.log("[] API HANDLER: fetchEmpleados");
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
export default fetchEmpleados;
