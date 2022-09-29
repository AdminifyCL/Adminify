// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import userState from "../state/userState.js";

// Definición del reducer: userSlice.
const userSlice = createSlice({
  name: "userSlice",
  initialState: userState,

  // Reducers.
  reducers: {
    userLogin: (state, action) => {
      console.log("[] userSlice: userLogin");

      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

// Exportación.
export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
