// Dependencias.
import initialState from "~redux/initialState.js";
import { actionUserTypes } from "../types/actionUserTypes.js";
import handleFirebaseErrors from "./handlers/handleFirebaseErrors.js";
import userAdapter from "../adapters/userAdapter.js";
const { loginWithEmail, onAuthState, logout, createUser, getUserData } = actionUserTypes;

// TODO: Falta estandarizar los datos del usuario para los reducers presentados a continuación. Cada uno de ellos recibe y procesa información distinta, omitiendo algunos parametros. Se debe ver detenidamente. Atte: @JajoScript.

// Definiendo los reducers de la pagina.
const userReducer = (state = initialState, action) => {
  console.log(`[🛂][REDUCER][${action.type}]`);
  const { data } = action;

  // Variables.
  let userAuth = {};
  let userData = {};

  // Control de errores.
  // TODO: Por hacer.

  // Manejando los actions.
  switch (action.type) {
    // ? Inicio de sesión del usuario con email y contraseña.
    case loginWithEmail:
      console.log(data);
      // Manejo de la información del usuario.
      userAuth = {
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
          userAuth: {},
          userError: dataError,
        };
        break;
      }

      return { ...state, userAuth };
      break;

    // ? Vigilancia al estado de la autenticación del usuario.
    case onAuthState:
      let isAuth = Object.entries(data).length > 0;

      // Manejo de la información del usuario.
      userAuth = {
        isAuthenticated: isAuth,
        email: data?.email ?? "",
        emailVerified: false,
        displayName: data?.displayName ?? "",
        uid: data?.uid ?? "",
      };

      return { ...state, userAuth: userAuth };
      break;

    //? Cierre de sesión del usuario.
    case logout:
      userAuth = { ...data };
      return { ...state, userAuth: userAuth };
      break;

    //? Creación de usuario con email y contraseña.
    case createUser:
      userAuth = { ...data };
      return { ...state, userAuth };
      break;

    //? Conseguir la información del usuario.
    case getUserData:
      // Adaptar la información del usuario.
      const userInfo = userAdapter(data);

      return { ...state, userInfo };
      break;

    default:
      return state;
  }
};

// Exportación del reducer.
export { userReducer };
