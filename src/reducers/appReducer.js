// Dependencias.
import initialState from "~redux/initialState.js";

// Definiendo los reducers de la pagina.
const appReducer = (state = initialState, action) => {
  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    default:
      return state;
  }
};

// Exportación del reducer.
export { appReducer };
