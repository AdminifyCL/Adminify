// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import ventasState from "../states/ventasState.js";

// Adapters.
// ...

// Definición del slice.
const ventasSlice = createSlice({
  name: "ventas",
  initialState: ventasState,

  // Reducers.
  reducers: {},
});

// Exportación.
export const {} = ventasSlice.actions;
export default ventasSlice.reducer;
