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
  reducers: {
    //* -- Metodo de pago.
    setMetodo: (state, action) => {
      const payload = action.payload;

      return { ...state, metodo: payload };
    },
  },
});

// Exportación.
export const { setMetodo } = ventasSlice.actions;
export default ventasSlice.reducer;
