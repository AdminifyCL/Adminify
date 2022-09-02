// Dependencias.
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React, { Component } from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./CuentaPage.scss";

// Definición de la pagina: Index.
class CuentaPage extends Component {
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
  handleMes = (mes) => {
    switch (mes) {
      case 0:
        return "Enero";
      case 1:
        return "Febrero";
      case 2:
        return "Marzo";
      case 3:
        return "Abril";
      case 4:
        return "Mayo";
      case 5:
        return "Junio";
      case 6:
        return "Julio";
      case 7:
        return "Agosto";
      case 8:
        return "Septiembre";
      case 9:
        return "Octubre";
      case 10:
        return "Noviembre";
      case 11:
        return "Diciembre";
      default:
        return "Error";
    }
  };

  handleFecha = (dateAt) => {
    console.log("[] DATEAT: ", dateAt);
    const timestamp = parseInt(dateAt);

    let fecha = new Date(timestamp);

    const fechaHumana = `${fecha.getDate()} de ${this.handleMes(
      fecha.getMonth()
    )} del ${fecha.getFullYear()}`;

    return fechaHumana;
  };
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { userInfo } = this.props;
    console.log("[] INFO:", userInfo);

    return (
      <section className="cuentaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cuentaPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista de la caja. */}
        <section className="cuentaPage_content">
          {/* Mi cuenta. */}
          <div className="cuentaPage_miCuenta_container">
            {/* Banner. */}
            <div className="cuentaPage_miCuenta_banner">
              {/* Titulo y desc. */}
              <div className="cuentaPage_miCuenta_title">
                <h1>Mi Cuenta</h1>
                <p>
                  Sección para editar las <strong>configuraciones</strong> de su cuenta.
                </p>
              </div>

              {/* Botón */}
              <div className="cuentaPage_miCuenta_button">
                <Button variant="contained">Editar cuenta</Button>
              </div>
            </div>

            {/* Contenido. */}
            <div className="cuentaPage_miCuenta_content">
              {/* Datos del usuario. */}
              <div className="cuentaPage_miCuenta_content_usuario">
                {/* Nombre y badge */}
                <div className="cuentaPage_miCuenta_content_usuario_nombre">
                  <h1>{userInfo.displayName}</h1>
                  <p>{userInfo.cargo}</p>
                </div>
                <p>{userInfo.email}</p>
              </div>

              {/* Fecha de creación. */}
              <div className="cuentaPage_miCuenta_content_creacion">
                <h1>Creación</h1>
                <p>{this.handleFecha(userInfo.createdAt)}</p>
              </div>

              {/* Fecha de conexión. */}
              <div className="cuentaPage_miCuenta_content_creacion">
                <h1>Ultima conexión</h1>
                <p>{this.handleFecha(userInfo.lastLoginAt?.seconds * 1000)}</p>
              </div>

              {/* Estado del correo. */}
              <div className="cuentaPage_miCuenta_content_creacion">
                <h1>Estado del correo</h1>
                <p>{userInfo.emailVerified ? "Verificado" : "No verificado"}</p>
              </div>

              {/* Licencia. */}
              <div className="cuentaPage_miCuenta_content_creacion">
                <h1>Licencia</h1>
                <p>{userInfo.licencia}</p>
              </div>
            </div>
          </div>

          {/* Categorias. */}
          {/* Licencia. */}
        </section>
      </section>
    );
  }
}

// PropTypes.
CuentaPage.propTypes = {};

// Exportación de la pagina: Index.
export default CuentaPage;
