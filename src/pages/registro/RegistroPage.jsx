// Dependencias.
import React, { Component } from "react";

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
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  reiniciarError = (evento) => {
    // Reinicio del stado.
    this.setState({ error: false });
  };
  validarFormulario = () => {
    // Lectura de los datos.
    const input_name = document.getElementById("nombre").value;

    console.log("[] TAMAÑO:");
    console.log(input_name.length);

    // Validaciones
    if (!input_name) {
      this.setState({ error: true });
      return;
    }

    // Estructura
    const data = {
      nombre: input_name,
    };

    this.handleCreateUser(data);
  };

  handleCreateUser = async (data) => {
    console.log("[#️⃣][INFO][PAGE:REGISTRO][handleCreateUser] Creando usuario...");
    const { createUser } = this.props;

    // Lectura de los datos.
    console.log(" DATOS: ");
    console.log(data);

    // await createUser(data);
  };
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { error } = this.state;
    console.log("[] ERROR: ", error);

    return (
      <body>
        <section className="registroPage_Titulo">
          <h1>Registro</h1>
        </section>
        <section className="registroPage_Formulario">
          <TextField fullWidth label="Nombre" variant="outlined" margin="dense" />
          <TextField fullWidth label="Apellido" variant="outlined" margin="dense" />
          <TextField type={"email"} fullWidth label="Email" variant="outlined" margin="dense" />

          <TextField
            type={"password"}
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="dense"
          />

          <TextField fullWidth label="Licencia" variant="outlined" margin="dense" />
        </section>

        <div className="registroPage_hiper">
          <a
            className="registroPage_hiper_link"
            target="_blank"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          >
            {" "}
            ¿No sabes cual es tu código de licencia?
          </a>
        </div>

        <div className="registroPage_Boton">
          <Button
            variant="contained"
            onClick={() => {
              console.log("Hola");
            }}
          >
            {" "}
            Crea tu cuenta{" "}
          </Button>
        </div>
      </body>
    );
  }
}

// PropTypes.
RegistroPage.propTypes = {
  createUser: PropTypes.func.isRequired,
};

// Exportación de la pagina: Index.
export default RegistroPage;

/*
      <section
        className="registroPage_"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",

          height: "100vh",
          width: "100%",
        }}
      >
        <div
          className="registroPage_"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            gap: "20px",
          }}
        >
          <h1>Vista de Registro</h1>
          <TextField
            variant="outlined"
            label={error ? "ERROR" : "Ingresa tu nombre"}
            id="nombre"
            error={error}
            helperText={error ? "Es necesario un nombre" : null}
            onChange={(event) => this.reiniciarError(event)}
          />

          <Button variant="contained" onClick={() => this.validarFormulario()}>
            Crear usuario
          </Button>
        </div>
>>>>>>> origin/dev-javier */
