// Dependencias.
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

// Estilos.
import "./EditarCategorias.scss";

// Definición del componente: <EditarCategorias />
const EditarCategorias = ({ visible, changeVisibility, setCategorias }) => {
  // -- Manejo del estado.
  const [categoria, setCategoria] = useState("");

  // -- Ciclo de vida del componente.
  // -- Metodos.
  const handleText = (event) => {
    const new_value = event.target.value;

    setCategoria(new_value);
  };
  const handleCategoria = () => {
    let new_categoria = {
      id: Math.random(),
      nombre: categoria,
    };

    // Agregando la nueva categoria a la lista.
    setCategorias((prev) => {
      return [...prev, new_categoria];
    });

    // Cerrando el modal.
    changeVisibility();
  };

  // -- Renderizado.
  return (
    <Dialog open={visible}>
      {/* Titulo del modal. */}
      <DialogTitle>Modificar categorias</DialogTitle>

      {/* Contenido del modal. */}
      <DialogContent style={{ paddingTop: 20 }}>
        {/* Agregar una nueva categoria. */}
        <TextField
          label="Agregar una nueva categoria"
          id="input-categoria"
          value={categoria}
          onChange={(event) => handleText(event)}
        />
      </DialogContent>

      {/* Botones del modal. */}
      <DialogActions>
        <Button variant="outlined" onClick={() => changeVisibility()}>
          Volver
        </Button>
        <Button variant="contained" onClick={() => handleCategoria()}>
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Exportación.
export default EditarCategorias;
