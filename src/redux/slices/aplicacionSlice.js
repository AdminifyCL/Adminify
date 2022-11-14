// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import aplicacionState from "../states/aplicacionState.js";

// Adapters.
// ...

// Definición del slice.
const aplicacionSlice = createSlice({
  name: "aplicacion",
  initialState: aplicacionState,

  // Reducers.
  reducers: {
    //* -- Manejo de las alertas.
    displayAlert: (state, action) => {
      let alertData = action.payload;
      let alertVisible = true;

      return { ...state, alertData, alertVisible };
    },

    deleteAlert: (state, action) => {
      let alertData = {
        type: "",
        title: "",
        message: "",
      };

      let alertVisible = false;

      return { ...state, alertData, alertVisible };
    },

    //* -- Manejo de la caja.
    openCaja: (state, action) => {
      console.log("[] REDUCER OPEN CAJA");

      return { ...state, statusCaja: true };
    },

    closeCaja: (state, action) => {
      console.log("[] REDUCER CLOSE CAJA");

      return { ...state, statusCaja: false };
    },
  },
});

// Exportación.
export const { displayAlert, deleteAlert, openCaja, closeCaja } = aplicacionSlice.actions;
export default aplicacionSlice.reducer;
