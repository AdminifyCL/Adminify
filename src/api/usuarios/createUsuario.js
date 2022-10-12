// Dependencias.

// Definición...
const createUsuario = async () => {
  console.log("[] API HANDLER: createUsuario");
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
export default createUsuario;
