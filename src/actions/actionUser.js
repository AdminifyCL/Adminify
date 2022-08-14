// Dependencias
import { actionUserTypes } from "../types/actionUserTypes.js";

/**
 * @name createUser
 * @description Creación de usuario en la base de datos.
 * @param {object} payload { email, password }
 * @return {object}
 */
const createUser = (payload) => {
  console.log(`[#️⃣][INFO][ACTION][${actionUserTypes.createUser}] `);

  // Dispatch.
  return {
    type: actionUserTypes.createUser,
    data: payload,
  };
};

/**
 * @name getUserAuth
 * @description Obtención de la autenticación del usuario.
 * @param {object} payload
 * @returns {object}
 */
const getUserAuth = (payload) => {
  console.log(`[#️⃣][INFO][ACTION][${actionUserTypes.getUserAuth}]`);

  // Dispatch.
  return {
    type: actionUserTypes.getUserAuth,
    data: payload,
  };
};

const userLogin = (payload) => {
  console.log(`[#️⃣][INFO][ACTION][${actionUserTypes.userLogin}]`);

  // Dispatch.
  return {
    type: actionUserTypes.userLogin,
    data: payload,
  };
};

// Exportación.
export { createUser, getUserAuth, userLogin };
