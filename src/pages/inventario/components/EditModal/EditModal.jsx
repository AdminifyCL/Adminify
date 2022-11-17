// Dependencias.
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./EditModal.scss";
import Styles from "./EditModal.styles.jsx";

// Hooks.
import { useLocalStorage } from "../../../../hooks/useLocalStorage.jsx";

// Definición del componente: EditModal.
const EditModal = (props) => {
  // 1. Manejo del estado.
  const { visible, setVisible, editProduct, producto, cargando } = props;
  const [categorias, setCategorias] = useLocalStorage("categorias", []);

  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [unidades, setUnidades] = useState("");

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  useEffect(() => {
    console.log("[] PRODUCTO:", producto);
    if (producto) {
      setNombre(producto.nombre);
      setValor(producto.valor);
      setCategoria(producto.categoria);
      setUnidades(producto.unidades);
    }
  }, [producto]);

  // 3. Metodos.
  const handleClose = () => {
    setVisible(false);
  };

  const handleChanges = (event) => {
    let value = event.target.value;
    let id = event.target.id ?? event.target.name;

    console.log("Value: ", value);
    console.log("Id: ", id);

    switch (id) {
      case "nombre":
        setNombre(value);
        break;
      case "valor":
        setValor(value);
        break;
      case "categoria":
        setCategoria(value);
        break;
      case "unidades":
        setUnidades(value);
        break;
      default:
        break;
    }
  };

  const mappingCategorias = () => {
    return categorias.map((categoria, index) => (
      <MenuItem value={categoria.nombre} key={categoria.id} id="categoria">
        {categoria.nombre}
      </MenuItem>
    ));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let productData = {
      id: producto.id,
      nombre: nombre,
      valor: valor,
      categoria: categoria,
      iconId: producto.iconId,
      unidades: unidades,
    };

    console.log("producto", producto);

    // Comunicarse con la API.
    await editProduct(productData);

    // Ocultar modal.
    setVisible(false);
  };

  // 4. Render.
  return (
    <Dialog open={visible} onClose={() => handleClose()}>
      <DialogTitle>
        <div className="EditModal_titleContainer">
          <h1>Editar un producto</h1>
        </div>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={(event) => handleSubmit(event)} className="EditModal_formContainer">
          {/* Inputs */}
          <div className="EditModal_inputContainer">
            <TextField
              id="nombre"
              placeholder="Nombre"
              label="Nombre"
              value={nombre}
              onChange={(event) => handleChanges(event)}
              type="text"
              variant="filled"
              color="primary"
              fullWidth
              required
            />
            <TextField
              name="categoria"
              id="categoria"
              label="Categoria"
              placeholder="Categoria del producto"
              value={categoria}
              variant="filled"
              select={true}
              onChange={(event) => handleChanges(event)}
              fullWidth
              required
            >
              {mappingCategorias()}
            </TextField>
            <TextField
              id="valor"
              label="Valor"
              placeholder="Valor"
              value={valor}
              type="number"
              variant="filled"
              color="primary"
              onChange={(event) => handleChanges(event)}
              fullWidth
              required
            />
            <TextField
              id="unidades"
              label="Unidades"
              placeholder="Unidades"
              value={unidades}
              type="number"
              variant="filled"
              color="primary"
              onChange={(event) => handleChanges(event)}
              fullWidth
              required
            />
          </div>

          {/* Iconos */}
          <div className="EditModal_iconsContainer"></div>

          {/* Button */}
          <div className="EditModal_buttonsContainer">
            <Button variant="outlined" onClick={() => handleClose()} type="button">
              Cancelar
            </Button>

            <Button variant="contained" onClick={() => {}} type="submit" disabled={cargando}>
              {cargando ? "Cargando..." : "Guardar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// PropTypes.
EditModal.propTypes = {};

// Exportación.
export default EditModal;
