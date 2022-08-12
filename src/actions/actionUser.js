// Dependencias
import { actionUserTypes } from "~types/actionUserTypes.js";

/**
 * @name createUser
 * @description Creación de usuario en la base de datos.
 * @param {object} payload { email, password }
 * @return {object}
 */
const createUser = (payload) => {
  console.log("[#️⃣][INFO][ACTION][createUser] Creando usuario...");

  console.log("[] PAYLOAD");
  console.log({ payload });

  // Dispatch.
  return {
    type: actionUserTypes.createUser,
    data: payload,
  };
};

export { createUser };
