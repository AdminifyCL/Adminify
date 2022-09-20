// Dependencias.
import initialState from "~redux/initialState.js";
import { actionUserTypes } from "../types/actionUserTypes.js";
import handleFirebaseErrors from "./handlers/handleFirebaseErrors.js";
import userAdapter from "../adapters/userAdapter.js";
const { loginWithEmail, onAuthState, logout, createUser, getUserData, cleanErrors } =
  actionUserTypes;

// Definiendo los reducers de la pagina.
const userReducer = (state = initialState, action) => {
  console.log(`[🛂][REDUCER:USER][${action.type}]`);
  const { data, error, success } = action;

  // Variables.
  let userAuth = {};
  let userData = {};

  // Control de errores.
  if (error) {
    console.log(`[🛂][REDUCER][${action.type}][ERROR]`);

    const message = handleFirebaseErrors(data);

    let dataError = {
      error: true,
      message: message ?? "",
    };

    return { ...state, userAuth: {}, userError: dataError };
  }

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

    //? Limpiar los errores.
    case cleanErrors:
      return { ...state, userError: {} };

    default:
      return state;
  }
};

// Exportación del reducer.
export { userReducer };
