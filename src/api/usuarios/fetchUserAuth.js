// Dependencias.

// Definición...
const fetchUserAuth = async () => {
  console.log("[] API HANDLER: fetchUserAuth");
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
export default fetchUserAuth;
