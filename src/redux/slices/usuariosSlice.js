// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import usuariosState from "../states/usuariosState.js";

// Adapters.
import adapterAuth from "../adapters/usuarios/userAuth.js";
import adapterData from "../adapters/usuarios/userData.js";

// Definición del reducer: userSlice.
const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: usuariosState,

  // Reducers.
  reducers: {
    //* -- Control de sesión del usuario.
    userLogin: (state, action) => {
      const payload = action.payload;

      // Aplicación de los adapters.
      let userAuth = adapterAuth(payload);

      return { ...state, userAuth };
    },

    userLogout: (state, action) => {},

    //* -- Control de datos del usuario.
    getUserData: (state, action) => {
      const payload = action.payload;

      // Aplicación de los adapters.
      let userData = adapterData(payload);

      return { ...state, userData };
    },

    getUserAuth: (state, action) => {},

    //* -- Creación de nuevos usuarios.
    createNewUser: (state, action) => {},
  },
});

// Exportación.
export const { userLogin, userLogout, getUserData, getUserAuth, createNewUser } =
  usuariosSlice.actions;
export default usuariosSlice.reducer;
