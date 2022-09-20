// Dependencias.

// Configuraciones.
import { actionProductTypes } from "../../types/actionProductTypes.js";
import { onSuccess, onError } from "../response.js";
const { getProducts: TYPE } = actionProductTypes;

const fetchProducts = (data) => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  // Fetch
  return async (dispatch) => {
    try {
      onSuccess(dispatch, TYPE);
    } catch (error) {
      onError(dispatch, TYPE, error);
    }
  };
};

// Exportación.
export default fetchProducts;
