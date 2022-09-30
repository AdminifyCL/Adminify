// Dependencias.
import { onError, onSuccess } from "../../config/dispatcher.js";
import { createNewUser } from "../../slices/userSlice.js";

// Definición del action.
const createUser = () => {
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve();
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };
};

// Exportación.
export default createUser;
