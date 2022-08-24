// Dependencias.
import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { FaEgg, FaDrumstickBite, FaFish, FaHamburger, FaIceCream } from "react-icons/fa";

// Estilos.

// Definición del componente.
class ProductModal extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      inputName: "",
      inputCategory: "",
      inputValue: "",
      inputUnits: "",
      inputIcon: "",
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleVisibility = () => {
    const { onClose } = this.props;

    // Paso 1: Enviar datos.
    const { inputName, inputCategory, inputValue, inputUnits, inputIcon } = this.state;
    const data = {
      nombre: inputName,
      categoria: inputCategory,
      valor: inputValue,
      unidades: inputUnits,
      icono: inputIcon,
    };

    console.log("[] Datos del formulario: ", data);

    // 2: Ocultar el modal.
    onClose();

    // 3: Resetear el formulario.
    this.setState({
      inputName: "",
      inputCategory: "",
      inputValue: "",
      inputUnits: "",
      inputIcon: "",
    });
  };

  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { open } = this.props;
    const { inputCategory } = this.state;

    return (
      <Dialog open={open} fullWidth={true}>
        {/* Titulo del modal */}
        <DialogTitle align="center">Agregar producto</DialogTitle>

        {/* Contenido del modal */}
        <DialogContent dividers={true}>
          <div style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
            <TextField
              name="inputName"
              label="Nombre"
              placeholder="Nombre del producto"
              variant="filled"
              fullWidth={true}
              onChange={(event) => this.handleChange(event)}
            />
            <TextField
              name="inputCategory"
              label="Categoria"
              placeholder="Categoria del producto"
              value={inputCategory}
              select={true}
              variant="filled"
              fullWidth={true}
              onChange={(event) => this.handleChange(event)}
            >
              <MenuItem key="sandwich" value="sandwich">
                Sandwich
              </MenuItem>
              <MenuItem key="vienesa" value="vienesa">
                Vienesa
              </MenuItem>
              <MenuItem key="as" value="as">
                AS
              </MenuItem>
            </TextField>
            <TextField
              name="inputValue"
              label="Valor"
              placeholder="Valor del producto"
              variant="filled"
              fullWidth={true}
              onChange={(event) => this.handleChange(event)}
            />
            <TextField
              name="inputUnits"
              label="Unidades"
              placeholder="Unidades en stock"
              variant="filled"
              fullWidth={true}
              onChange={(event) => this.handleChange(event)}
            />

            {/* Iconos del producto */}
            <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
              <Button variant="outlined">
                <FaHamburger />
              </Button>
              <Button variant="outlined">
                <FaIceCream />
              </Button>
              <Button variant="outlined">
                <FaDrumstickBite />
              </Button>
            </div>
          </div>
        </DialogContent>

        {/* Botones del modal */}
        <DialogActions>
          <Button variant="outlined" onClick={() => this.handleVisibility()}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={() => this.handleVisibility()}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

// Proptypes.
// Exportación.
export default ProductModal;
