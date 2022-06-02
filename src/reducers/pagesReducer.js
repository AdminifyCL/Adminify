// Dependencias.
import initialState from "~redux/initialState.js";
import { actionsPageType } from "~types/actionPageTypes.js";

// Definiendo los reducers de la pagina.
const pageReducer = (state = initialState, action) => {
  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    case actionsPageType.setActualPage:
      return {
        ...state,
        actualPage: data.pageName,
      };

    case actionsPageType.resetActualPage:
      return {
        ...state,
        actualPage: "index",
      };

    default:
      return state;
  }
};

// Exportación del reducer.
export { pageReducer };
