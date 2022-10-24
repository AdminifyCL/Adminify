// Dependencias.
import React, { useState, useEffect } from "react";
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,TextField,MenuItem,IconButton,} from "@mui/material";
import { FaEgg, FaDrumstickBite, FaFish, FaHamburger, FaIceCream } from "react-icons/fa";

import PropTypes from "prop-types";

// Hooks.
import { useLocalStorage } from "../../../hooks/useLocalStorage.jsx";

// Estilos.

// Definición del componente: <ProductModal />
const EmployeeModal = (props) => {
  // -- Manejo de estado.
  const { open, onClose, createProduct } = props;
  const [categorias, setCategorias] = useLocalStorage("categorias", []);
  const [inputName, setInputName] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputUnits, setInputUnits] = useState("");
  const [inputIcon, setInputIcon] = useState("");

  // -- Ciclo de vida.
  // -- Metodos.
  const handleChange = (event) => {
    // setState({ [event.target.name]: event.target.value });
    const inputId = event.target.name;
    const new_value = event.target.value;

    switch (inputId) {
      case "inputName":
        setInputName(new_value);
        break;
      case "inputCategory":
        setInputCategory(new_value);
        break;
      case "inputValue":
        setInputValue(new_value);
        break;
      case "inputUnits":
        setInputUnits(new_value);
        break;
      case "inputIcon":
        setInputIcon(new_value);
        break;
      default:
        break;
    }
  };

  const handleVisibility = async (type) => {
    if (type === "close") {
      // 2: Ocultar el modal.
      onClose();

      // 3: Resetear el formulario.
      setInputName("");
      setInputCategory("");
      setInputValue("");
      setInputUnits("");
      setInputIcon("");

      return;
    }

    // Paso 1: Enviar datos.
    const data = {
      nombre: inputName,
      categoria: inputCategory,
      valor: inputValue,
      unidades: inputUnits,
      icono: inputIcon,
    };

    // 0: Validar los campos.

    // 1: Crear los productos en la BD.
    await createProduct(data);

    // 2: Ocultar el modal.
    onClose();

    // 3: Resetear el formulario.
    setInputName("");
    setInputCategory("");
    setInputValue("");
    setInputUnits("");
    setInputIcon("");

    return;
  };

  const mappingCategorias = () => {
    return categorias.map((categoria) => {
      return (
        <MenuItem key={categoria.id} value={categoria.nombre}>
          {categoria.nombre}
        </MenuItem>
      );
    });
  };

  // -- Renderizado.
  return (
    <Dialog open={open} fullWidth={true}>
      {/* Titulo del modal */}
      <DialogTitle align="center">Agregar empleado</DialogTitle>

      {/* Contenido del modal */}
      <DialogContent dividers={true}>
        <div style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
          <TextField
            name="inputName"
            label="Nombre"
            placeholder="Nombre"
            variant="filled"
            fullWidth={true}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            name="inputName"
            label="Correo"
            placeholder="Correo"
            variant="filled"
            fullWidth={true}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            name="inputCategory"
            label="Cargo"
            placeholder="Cargo"
            value={inputCategory}
            select={true}
            variant="filled"
            fullWidth={true}
            onChange={(event) => handleChange(event)}
          >
            {mappingCategorias()}
          </TextField>
        </div>
      </DialogContent>

      {/* Botones del modal */}
      <DialogActions>
        <Button variant="outlined" onClick={() => handleVisibility("close")}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={() => handleVisibility("save")}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Proptypes.
EmployeeModal.proptypes = {
  open: PropTypes.bool.isRequired,
  setClose: PropTypes.func.isRequired,
};

// Exportación.
export default EmployeeModal;
