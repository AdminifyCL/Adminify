// Dependencias.
// ...

// Configuraciones.
import { actionProductTypes } from "../../types/actionProductTypes.js";
import { onSuccess, onError } from "../response.js";
const { deleteProduct: TYPE } = actionProductTypes;

const deleteProduct = () => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  // Fetch
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        onSuccess(dispatch, TYPE, {});
        resolve();
      } catch (error) {
        onError(dispatch, TYPE, error);
        reject(error);
      }
    });
  };
};

// Exportación.
export { deleteProduct };
