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
    //* -- Manejo de las ventas.
    fetchVentas: (state, action) => {
      const payload = action.payload;

      return { ...state, ventas: payload };
    },

    appendVenta: (state, action) => {
      const payload = action.payload;
      const newList = [...state.ventas, payload].sort((a, b) => {
        return b.fecha.seconds - a.fecha.seconds;
      });

      return { ...state, ventas: newList };
    },

    removeVenta: (state, action) => {
      const payload = action.payload;

      return {
        ...state,
        ventas: state.ventas.filter((venta) => venta.id !== payload.id),
      };
    },

    //* -- Metodo de pago.
    setMetodo: (state, action) => {
      const payload = action.payload;

      return { ...state, metodo: payload };
    },

    clearMetodo: (state, action) => {
      return { ...state, metodo: "" };
    },
  },
});

// Exportación.
export const { fetchVentas, appendVenta, removeVenta, setMetodo, clearMetodo } =
  ventasSlice.actions;
export default ventasSlice.reducer;
