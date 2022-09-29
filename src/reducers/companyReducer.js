// Dependencias.

import { actionCompanyTypes } from "../types/actionCompanyTypes.js";
const { cleanErrors } = actionCompanyTypes;

// Definiendo los reducers de la pagina.
const companyReducer = (state = initialState, action) => {
  // console.log(`[🛂][REDUCER:COMPANY][${action.type}]`);
  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    //? Limpiar los errores.
    case cleanErrors:
      return { ...state, companyError: {} };

    default:
      return state;
  }
};

// Exportación del reducer.
export { companyReducer };
