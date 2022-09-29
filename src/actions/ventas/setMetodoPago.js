// Dependencias.
// ...

// Configuraciones.
// import { actionProductTypes } from "../../types/action.js";
import { onSuccess, onError } from "../response.js";
// const { deleteProduct: TYPE } = actionProductTypes;

const setMetodoPago = () => {
  // console.log(`[🛂][ACTION][${TYPE}]`);

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
// export { setMetodoPago };
