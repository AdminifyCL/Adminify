// Dependencias.

// Configuraciones.
import { actionAppTypes } from "../../types/actionAppTypes.js";
import { onSuccess, onError } from "../response.js";
const { cleanErrors: TYPE } = actionAppTypes;

const cleanErrors = (data) => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  // Fetch
  return async (dispatch) => {
    onSuccess(dispatch, TYPE);
  };
};

// Exportación.
export default cleanErrors;
