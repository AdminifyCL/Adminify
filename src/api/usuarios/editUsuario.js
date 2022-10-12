// Dependencias.

// Definición...
const editUsuario = async () => {
  console.log("[] API HANDLER: editUsuario");
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
export default editUsuario;
