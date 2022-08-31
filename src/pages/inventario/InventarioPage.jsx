// Dependencias.
import React, { Component } from "react";
import { Button, Modal } from "@mui/material";
import PropTypes from "prop-types";
import fakeElements from "../../models/fakeElements.js";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import TableContainer from "../../components/Table/Table.jsx";
import ProductModal from "../../components/Modals/Products/ProductModal.jsx";
import ModalContext from "../../contexts/ModalContext.jsx";

// Importación de estilos.
import "./InventarioPage.scss";

// Definición de la pagina: Index.
class InventarioPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      modalVisibility: false,
    };
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
    this.setState({ modalVisibility: true });
  };

  handleVisibility = () => {
    this.setState({ modalVisibility: !this.state.modalVisibility });
  };

  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { modalProduct } = this.state;

    return (
      <section className="inventarioPage_container">
        {/* Navegación de la aplicación. */}
        <section className="inventarioPage_navigation">
          <TabNavigation />
        </section>

        {/* Modal */}
        <ProductModal open={this.state.modalVisibility} onClose={this.handleVisibility} />

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
            {/* Tabla de elementos. */}
            <TableContainer data={fakeElements} />
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
