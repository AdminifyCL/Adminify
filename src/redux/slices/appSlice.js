// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import appState from "../state/appState.js";

// Adapters.
// ...

// Definición del reducer: userSlice.
const aplicationSlice = createSlice({
  name: "aplicacion",
  initialState: appState,

  // Reducers.
  reducers: {
    //* --
  },
});

// Exportación.
export const {} = aplicationSlice.actions;
export default aplicationSlice.reducer;
