// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import ventaState from "../state/ventasState.js";

// Adapters.
// ...

// Definición del reducer: ventasSlice.
const ventaSlice = createSlice({
  name: "venta",
  initialState: ventaState,

  // Reducers.
  reducers: {
    //* --
  },
});

// Exportación.
export const {} = ventaSlice.actions;
export default ventaSlice.reducer;
