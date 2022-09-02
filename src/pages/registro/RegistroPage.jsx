// Dependencias.
import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  Button,
  TextField,
  FormHelperText,
  InputLabel,
  InputAdornment,
  input,
} from "@mui/material";

import PropTypes from "prop-types";

// Importación de estilos.
import "./RegistroPage.scss";

// Definición de la pagina: Index.
class RegistroPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };

    const data = {
      nombre: "gonzalo",
      email: "gonzalo@gmail.com",
      apellido: "cañas",
      licencia: "CUADRILLE-PAYADMIN-01",
      cargo: "dueño",
      contraseña: "12345",
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  handleChange = (value) => {
    const inputId = value.target.id; // inputCorreo = ""
    const inputValue = value.target.value; // ""

    this.setState({
      [inputId]: {
        value: inputValue,
        error: false,
      },
    });
  };

  reiniciarError = (evento) => {
    // Reinicio del stado.
    this.setState({ error: false });
  };
  validarFormulario = () => {
    // Estructura
    const data = {
      nombre: "gonzalo",
      email: "gonzalo@gmail.com",
      apellido: "cañas",
      licencia: "CUADRILLE-PAYADMIN-01",
      cargo: "dueño",
      contraseña: "12345",
    };

    this.handleCreateUser(data);
  };

  handleCreateUser = async (data) => {
    console.log("[🛂][PAGE:REGISTRO][handleCreateUser] Creando usuario...");
    const { createUser } = this.props;

    // Lectura de los datos.
    console.log(" DATOS: ");
    console.log(data);

    await createUser(data);
  };
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { error } = this.state;

    return (
      <>
        <section className="registroPage_Contenedor">
          <section className="registroPage_Contenido">
            <section className="registroPage_Titulo">
              <h1>Registro</h1>
            </section>
            <section className="registroPage_Formulario">
              <TextField
                id="inputNombre"
                fullWidth
                label="Nombre"
                variant="outlined"
                margin="dense"
              />
              <TextField
                id="inputApellido"
                fullWidth
                label="Apellido"
                variant="outlined"
                margin="dense"
              />
              <TextField
                id="inputEmail"
                type={"email"}
                fullWidth
                label="Email"
                variant="outlined"
                margin="dense"
              />
              <TextField
                id="inputPassword"
                type={"password"}
                fullWidth
                label="Contraseña"
                variant="outlined"
                margin="dense"
              />

              <TextField fullWidth label="Licencia" variant="outlined" margin="dense" />
            </section>

            {/* Botones de acción */}
            <section className="registroPage_ContenedorBotones">
              <Link to="/login">
                <Button className="registroPage_Volver" variant="outlined">
                  Volver
                </Button>
              </Link>

              <Button
                className="registroPage_CrearCuenta"
                variant="contained"
                onClick={() => {
                  this.validarFormulario();
                }}
              >
                Crea tu cuenta
              </Button>
            </section>
          </section>
        </section>
      </>
    );
  }
}

// PropTypes.
RegistroPage.propTypes = {
  createUser: PropTypes.func.isRequired,
};

// Exportación de la pagina: Index.
export default RegistroPage;
