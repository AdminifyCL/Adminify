// Dependencias.
import initialState from "../redux/initialState.js";
import { actionsPageType } from "../types/actionPageTypes.js";
const { cleanErrors } = actionsPageType;

// Definiendo los reducers de la pagina.
const pageReducer = (state = initialState, action) => {
  // console.log(`[🛂][REDUCER:PAGES][${action.type}]`);
  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    //? Limpiar los errores.
    case cleanErrors:
      return { ...state, pageError: {} };

    default:
      return state;
  }
};

// Exportación del reducer.
export { pageReducer };
