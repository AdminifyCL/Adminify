// Dependencias.
import initialState from "~redux/initialState.js";
import { actionUserTypes } from "../types/actionUserTypes.js";
const { loginWithEmail, onAuthState, logout } = actionUserTypes;

// Definiendo los reducers de la pagina.
const userReducer = (state = initialState, action) => {
  console.log(`[#️⃣][INFO][REDUCER][${action.type}]`);
  const { data } = action;

  // Variables.
  let userData = {};

  // Manejando los actions.
  switch (action.type) {
    // ? Inicio de sesión del usuario con email y contraseña.
    case loginWithEmail:
      // Manejo de la información del usuario.
      userData = {
        isAuthenticated: data ? true : false,
        email: data?.email ?? "",
        emailVerified: false,
        uid: data?.uid ?? "",
      };

      return { ...state, userData };

    // ? Vigilancia al estado de la autenticación del usuario.
    case onAuthState:
      console.log("[] DATA: ");
      console.log(data);

      let isAuth = Object.entries(data).length > 0;

      // Manejo de la información del usuario.
      userData = {
        isAuthenticated: isAuth,
        email: data?.email ?? "",
        emailVerified: false,
        uid: data?.uid ?? "",
      };

      console.log("[] USER DATA: ");
      console.log(userData);

      return { ...state, userData };

    //? Cierre de sesión del usuario.
    case logout:
      console.log("[] Cierre de sesión del usuario.");
      console.log("[] DATA:", data);

      userData = { ...data };

      return { ...state, userData };
    default:
      return state;
  }
};

// Exportación del reducer.
export { userReducer };
