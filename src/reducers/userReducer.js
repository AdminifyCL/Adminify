// Dependencias.
import initialState from "~redux/initialState.js";
import { actionUserTypes } from "../types/actionUserTypes.js";
import handleFirebaseErrors from "./handlers/handleFirebaseErrors.js";
const { loginWithEmail, onAuthState, logout, createUser } = actionUserTypes;

// TODO: Falta estandarizar los datos del usuario para los reducers presentados a continuación. Cada uno de ellos recibe y procesa información distinta, omitiendo algunos parametros. Se debe ver detenidamente. Atte: @JajoScript.

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
        isAuthenticated: data?.uid ? true : false,
        email: data?.email ?? "",
        emailVerified: false,
        displayName: data?.displayName ?? "",
        uid: data?.uid ?? "",
      };

      if (data?.error) {
        const message = handleFirebaseErrors(data.error.firebaseError);

        let dataError = {
          error: true,
          message: message,
        };

        return {
          ...state,
          userData: {},
          userError: dataError,
        };
      }

      return { ...state, userData };

    // ? Vigilancia al estado de la autenticación del usuario.
    case onAuthState:
      let isAuth = Object.entries(data).length > 0;

      // Manejo de la información del usuario.
      userData = {
        isAuthenticated: isAuth,
        email: data?.email ?? "",
        emailVerified: false,
        displayName: data?.displayName ?? "",
        uid: data?.uid ?? "",
      };

      console.log("[] USER DATA: ", userData);

      return { ...state, userData: userData };

    //? Cierre de sesión del usuario.
    case logout:
      userData = { ...data };
      return { ...state, userData: userData };

    // ? Creación de usuario con email y contraseña.
    case createUser:
      userData = { ...data };
      return { ...state, userData };

    default:
      return state;
  }
};

// Exportación del reducer.
export { userReducer };
