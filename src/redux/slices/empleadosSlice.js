// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import empleadosState from "../states/empleadosState.js";

// Adapters.
// ...

// Definición del slice.
const empleadosSlice = createSlice({
  name: "empleados",
  initialState: empleadosState,

  // Reducers.
  reducers: {},
});

// Exportación.
export const {} = empleadosSlice.actions;
export default empleadosSlice.reducer;
