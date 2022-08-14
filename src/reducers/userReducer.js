// Dependencias.
import initialState from "~redux/initialState.js";
import { actionUserTypes } from "../types/actionUserTypes.js";
import { handleCreateUser } from "../handlers/handleUsers.js";
import { handleGetAuth } from "../handlers/handleGetAuth.js";
import { handleUserSession } from "../handlers/handleUserSession.js";

// Definiendo los reducers de la pagina.
const userReducer = async (state = initialState, action) => {
  console.log("[#️⃣][INFO][REDUCER][userReducer] Reducer de usuario...");

  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    //? Creación de usuario.
    case actionUserTypes.createUser:
      console.log(`[#️⃣][INFO][REDUCER][${actionUserTypes.createUser}]`);

      // Creando usuario en la base de datos.
      await handleCreateUser(data);
      return state;

    //? Obtención de la autenticación del usuario.
    case actionUserTypes.getUserAuth:
      console.log(`[#️⃣][INFO][REDUCER][${actionUserTypes.getUserAuth}]`);

      let responseAuth = await handleGetAuth();
      let isAuth = responseAuth ? true : false;

      return { ...state, isAuth: isAuth };

    //? Inicio de sesión del usuario.
    case actionUserTypes.userLogin:
      console.log(`[#️⃣][INFO][REDUCER][${actionUserTypes.userLogin}]`);

      // Iniciando sesión del usuario.
      let response = await handleUserSession(data);

      let userAuth = response ? true : false;
      console.log("[] USER AUTH :", userAuth);
      return { ...state, isAuth: userAuth };

    default:
      return state;
  }
};

// Exportación del reducer.
export { userReducer };
