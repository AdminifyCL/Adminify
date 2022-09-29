// Dependencias.
import { actionAppTypes } from "../types/actionAppTypes.js";

const { cleanErrors } = actionAppTypes;

// Definiendo los reducers de la pagina.
const appReducer = (state = initialState, action) => {
  // console.log(`[🛂][REDUCER:APP][${action.type}]`);
  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    //? Limpiar los errores.
    case cleanErrors:
      return { ...state, appError: {} };

    default:
      return state;
  }
};

// Exportación del reducer.
export { appReducer };
