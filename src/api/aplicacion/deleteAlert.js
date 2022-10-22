// Dependencias.

// Definición...
const deleteAlert = async () => {
  console.log("[] API HANDLER: deleteAlert");
  return new Promise(async (resolve, reject) => {
    try {
      // Definición de la alerta.
      let new_alert = { type: "", title: "", message: "", alertVisible: false };
      resolve(new_alert);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default deleteAlert;
