// Dependencias.
import { onError, onSuccess } from "../../config/dispatcher.js";
import { getUserData } from "../../slices/userSlice.js";

// Definición del action.
const fetchUserData = () => {
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
export default fetchUserData;
