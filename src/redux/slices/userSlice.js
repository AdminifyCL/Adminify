// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import userState from "../state/usuariosState.js";

// Adapters.
import adapterAuth from "../adapters/user/userAuth.js";

// Definición del reducer: userSlice.
const usuarioSlice = createSlice({
  name: "usuario",
  initialState: userState,

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
    getUserData: (state, action) => {},

    getUserAuth: (state, action) => {},

    //* -- Creación de nuevos usuarios.
    createNewUser: (state, action) => {},
  },
});

// Exportación.
export const { userLogin, userLogout, getUserData, getUserAuth, createNewUser } =
  usuarioSlice.actions;
export default usuarioSlice.reducer;
