// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import productState from "../state/productosState.js";

// Adapters.
// ...

// Definición del reducer: productSlice.
const productSlice = createSlice({
  name: "aplicacion",
  initialState: productState,

  // Reducers.
  reducers: {
    //* --
  },
});

// Exportación.
export const {} = productSlice.actions;
export default productSlice.reducer;
