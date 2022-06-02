// Dependencias.
import initialState from "~redux/initialState.js";

// Definición de los reducers.
const Reducers = (state = initialState, action) => {
  console.log("[REDUCER][GLOBAL]");

  // Manejando los actions.
  switch (action.type) {
    case "SET_ACTUAL_PAGE":
      return {
        ...state,
        site: { ...state.site, actualPage: action.pageName },
      };

    default:
      return state;
  }
};

// Exportación de los reducers.
export default Reducers;
