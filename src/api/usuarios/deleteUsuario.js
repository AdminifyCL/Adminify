// Dependencias.

// Definición...
const deleteUsuario = async () => {
  console.log("[] API HANDLER: deleteUsuario");
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
export default deleteUsuario;
