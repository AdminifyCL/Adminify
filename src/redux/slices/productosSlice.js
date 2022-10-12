// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import productosState from "../states/productosState.js";

// Adapters.
// ...

// Definición del slice.
const productosSlice = createSlice({
  name: "productos",
  initialState: productosState,

  // Reducers.
  reducers: {},
});

// Exportación.
export const {} = productosSlice.actions;
export default productosSlice.reducer;
