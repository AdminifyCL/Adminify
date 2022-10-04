// Dependencias.
// ...

const userLogin = async (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("[] API HANDLER: userLogin");
      const userData = { uid: "hola" };
      resolve(userData);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default userLogin;
