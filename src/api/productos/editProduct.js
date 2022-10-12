// Dependencias.

// Definición...
const editProduct = async () => {
  console.log("[] API HANDLER: editProduct");
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
export default editProduct;
