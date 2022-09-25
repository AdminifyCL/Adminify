// Dependencias.
import initialState from "../redux/initialState.js";
import { actionProductTypes } from "../types/actionProductTypes";
const { cleanErrors, createProduct, getProducts } = actionProductTypes;

// Definiendo los reducers de la pagina.
const productReducer = (state = initialState, action) => {
  console.log(`[🛂][REDUCER:PRODUCT][${action.type}]`);
  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    //? Conseguir la lista de productos.
    case getProducts:
      return { ...state, allProducts: data };

    //? Limpiar los errores.
    case cleanErrors:
      return { ...state, productError: {} };

    default:
      return state;
  }
};

// Exportación del reducer.
export { productReducer };
