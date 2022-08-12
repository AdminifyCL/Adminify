// Dependencias.
import React, { Component } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Importación de estilos.
import "./RegistroPage.scss";

// Definición de la pagina: Index.
class RegistroPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  handleCreateUser = async () => {
    console.log("[#️⃣][INFO][PAGE:REGISTRO][handleCreateUser] Creando usuario...");
    const { createUser } = this.props;

    // Datos de ejemplo.
    const data = {
      nombre: "Gonzalo",
      apellido: "Cañas",
      email: "gonzalo@gmail.com",
      contraseña: "asd123",
      cargo: "dueño",
      licencia: "CUADRILLE-PAYADMIN-01",
    };

    await createUser(data);
  };
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return (
      <section
        className=""
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
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h1>Vista de Registro</h1>
          <Button variant="contained" onClick={() => this.handleCreateUser()}>
            Crear usuario
          </Button>
        </div>
      </section>
    );
  }
}

// PropTypes.
RegistroPage.propTypes = {
  createUser: PropTypes.func.isRequired,
};

// Exportación de la pagina: Index.
export default RegistroPage;
