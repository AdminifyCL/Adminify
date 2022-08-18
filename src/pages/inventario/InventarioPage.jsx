// Dependencias.
import React, { Component } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import fakeElements from "../../models/fakeElements.js";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./InventarioPage.scss";

// Definición de la pagina: Index.
class InventarioPage extends Component {
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
  handleCreateProduct = () => {
    console.log("[] Agregando producto...");
  };

  // -- Métodos [MAPPING].
  mappingElements = () => {
    const elements = [...fakeElements];

    // Recorriendo el arreglo de elementos.
    return elements.map((element, index) => {
      return (
        <div className="inventarioPage_content_element" key={`product-${index}`}>
          {/* Icono column */}
          <div className="inventarioPage_content_column">
            <p>{element.icono}</p>
            <div>contenedor</div>
          </div>

          {/* Identificador column */}
          <div className="inventarioPage_content_column">
            <p>{element.id}</p>
            <div>contenedor</div>
          </div>

          {/* Nombre column */}
          <div className="inventarioPage_content_column">
            <p>{element.nombre}</p>
            <div>contenedor</div>
          </div>

          {/* Valor column */}
          <div className="inventarioPage_content_column">
            <p>{element.valor}</p>
            <div>contenedor</div>
          </div>

          {/* Disponibilidad column */}
          <div className="inventarioPage_content_column">
            <p>{element.disponibilidad ? "Sí" : "No"}</p>
            <div>contenedor</div>
          </div>

          {/* Unidades column */}
          <div className="inventarioPage_content_column">
            <p>{element.unidades}</p>
            <div>contenedor</div>
          </div>

          {/* Botones column */}
          <div className="inventarioPage_content_element-button">
            <Button variant="contained">Editar</Button>
            <Button variant="outlined">Eliminar</Button>
          </div>
        </div>
      );
    });
  };

  // Renderizado.
  render() {
    return (
      <section className="inventarioPage_container">
        {/* Navegación de la aplicación. */}
        <section className="inventarioPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista de la caja. */}
        <section className="inventarioPage_content">
          {/* Titulo y boton de acción */}
          <div className="inventarioPage_content_header">
            <h1>Administración de inventario</h1>
            <Button variant="contained" onClick={() => this.handleCreateProduct()}>
              Agregar producto
            </Button>
          </div>
          {/* Contenedor de elementos. */}
          <div className="inventarioPage_content_container">
            {/* Elementos de la tabla. */}
            <div className="inventarioPage_content_container-element">{this.mappingElements()}</div>
          </div>
        </section>
      </section>
    );
  }
}

// PropTypes.
InventarioPage.propTypes = {};

// Exportación de la pagina: Index.
export default InventarioPage;
