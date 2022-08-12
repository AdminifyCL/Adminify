// Dependencias.
import initialState from "~redux/initialState.js";
import { actionUserTypes } from "~types/actionUserTypes.js";
import { handleCreateUser } from "../handlers/handleUsers.js";

// Definiendo los reducers de la pagina.
const userReducer = async (state = initialState, action) => {
  console.log("[#️⃣][INFO][REDUCER][userReducer] Reducer de usuario...");

  const { data } = action;

  // Manejando los actions.
  switch (action.type) {
    case actionUserTypes.createUser:
      // Creando usuario en la base de datos.
      await handleCreateUser(data);

      return state;

    default:
      return state;
  }
};

// Exportación del reducer.
export { userReducer };
