// Dependencias.
import initialState from "~redux/initialState.js";
import { actionUserTypes } from "../types/actionUserTypes.js";
const { loginWithEmail } = actionUserTypes;

// Definiendo los reducers de la pagina.
const userReducer = (state = initialState, action) => {
  console.log(`[#️⃣][INFO][REDUCER][${action.type}]`);
  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    case loginWithEmail:
      console.log("[] REDUCER DATA::");
      console.log(data);

      let userData = {
        isAuthenticated: data ? true : false,
        email: data?.email ?? "",
        emailVerified: false,
        uid: data?.uid ?? "",
      };

      return { ...state, userData };
    default:
      return state;
  }
};

// Exportación del reducer.
export { userReducer };
