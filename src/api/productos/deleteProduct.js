// Dependencias.

// Definición...
const deleteProduct = async () => {
  console.log("[] API HANDLER: deleteProduct");
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
export default deleteProduct;
