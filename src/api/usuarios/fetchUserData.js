// Dependencias.

// Definición...
const fetchUserData = async () => {
  console.log("[] API HANDLER: fetchUserData");
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
export default fetchUserData;
