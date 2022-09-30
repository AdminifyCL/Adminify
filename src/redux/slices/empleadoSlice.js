// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import empleadoState from "../state/empleadosState.js";

// Adapters.
// ...

// Definición del reducer: empleadoSlice.
const empleadoSlice = createSlice({
  name: "empleado",
  initialState: empleadoState,

  // Reducers.
  reducers: {
    //* --
  },
});

// Exportación.
export const {} = empleadoSlice.actions;
export default empleadoSlice.reducer;
