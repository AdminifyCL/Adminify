// Dependencias.
import { userLogin } from "../../slices/userSlice.js";

// Definición del action.
const userLoginWithEmail = (data) => {
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        let testData = {
          email: "Hola",
        };

        resolve("Login exitoso.");
        dispatch(userLogin(testData));
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };
};

// Exportación.
export default userLoginWithEmail;
