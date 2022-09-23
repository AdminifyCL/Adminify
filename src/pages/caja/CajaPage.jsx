// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import fakeElements from "../../models/fakeElements.js";
import { Button } from "@mui/material";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import { getDatabase } from "firebase/database";
import { Menu } from "./Menu";
import { Navigate } from "react-router-dom";
import { PublicUrls, PrivateUrls } from "../../models/Navigation.js";

// Importación de estilos.
import "./CajaPage.scss";
import { width } from "@mui/system";

const productos = [...fakeElements];
const data = getDatabase();

function capitalize(word) {
  if (word.length > 1) {
    return word[0].toUpperCase() + word.slice(1);
  } else if (word.length == 1) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

// Definición de la pagina: Index.
class CajaPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    this.state = { total: 0, carro: [], finder: "", pago: true, toPago: false };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return this.state.pago ? (
      <section className="cajaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cajaPage_navigation">
          <TabNavigation />
        </section>
        <h1>
          {/* Vista de la caja. */}
          <section className="cajaPage_content">
            {/* Division en la que se ven los productos */}
            <div className="cajaPage_Productos">
              <div className="cajaPage_Productos_cabecera">
                <p>Lista de productos</p>
                <input
                  type={"search"}
                  className="cajaPage_Buscador"
                  onChange={(e) => {
                    this.setState({ finder: e.target.value });
                  }}
                ></input>
              </div>
              <div className="cajaPage_Productos_lista">
                {productos.map((producto) => {
                  if (producto.nombre.startsWith(capitalize(this.state.finder))) {
                    return (
                      <div className="cajaPage_Productos_producto">
                        <p>
                          <FaHamburger></FaHamburger>
                        </p>
                        <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
                          {producto.nombre}
                        </p>
                        <p className="cajaPage_producto_texto">${producto.valor}</p>
                        <Button
                          variant="contained"
                          onClick={() => {
                            // Si no existe un objeto en el carro con el nombre de este producto lo agrega al carro
                            let vista_carro = this.state.carro.map((producto_carro) => {
                              if (producto_carro.nombre == producto.nombre) {
                                return true;
                              } else {
                                return false;
                              }
                            });
                            if (!vista_carro.includes(true)) {
                              this.setState({ total: this.state.total + producto.valor });
                              this.setState({
                                carro: [
                                  ...this.state.carro,
                                  {
                                    index: this.state.carro.length,
                                    nombre: producto.nombre,
                                    precio: producto.valor,
                                    cantidad: 1,
                                  },
                                ],
                              });
                            } else {
                              this.setState({
                                carro: this.state.carro.map((item) => {
                                  if (producto.cantidad > 1) {
                                    this.setState({ total: this.state.total + producto.precio });
                                  }
                                  if (item.nombre == producto.nombre) {
                                    item.cantidad = item.cantidad + 1;
                                  }
                                  return item;
                                }),
                              });
                              this.setState({ total: this.state.total + producto.valor });
                            }
                          }}
                        >
                          Añadir
                        </Button>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            {/*Division en la que se ven los datos del cajero*/}
            <div className="cajaPage_Cajero">
              <div className="cajaPage_Cajero_cabecera">Bienvenido usuario</div>
            </div>
            {/* Division en la que se ve el carro */}
            <div className="cajaPage_Carro">
              <div className="cajaPage_Carro_cabecera">
                <p> Carrito </p>
              </div>
              {this.state.carro.map((elemento) => {
                return (
                  <div className="cajaPage_Carro_producto">
                    <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
                      {elemento.nombre}
                    </p>
                    <div className="cajaPage_carro_cantidad">
                      <button
                        style={{ "padding-bottom": "4px" }}
                        className="cajaPage_carro_boton"
                        onClick={() => {
                          this.setState({
                            carro: this.state.carro.map((item) => {
                              if (elemento.cantidad > 1) {
                                this.setState({ total: this.state.total - elemento.precio });
                              }
                              if (item.nombre == elemento.nombre) {
                                item.cantidad = item.cantidad - 1 > 0 ? item.cantidad - 1 : 1;
                              }
                              return item;
                            }),
                          });
                        }}
                      >
                        -
                      </button>

                      <p style={{ margin: "1px 5px 1px 5px", width: "20%" }}>
                        {" "}
                        {elemento.cantidad >= 1 ? elemento.cantidad : 1}{" "}
                      </p>

                      <button
                        className="cajaPage_carro_boton"
                        onClick={() => {
                          this.setState({
                            carro: this.state.carro.map((item) => {
                              if (item.nombre == elemento.nombre) {
                                item.cantidad = item.cantidad + 1;
                              }
                              return item;
                            }),
                          });
                          this.setState({ total: this.state.total + elemento.precio });
                        }}
                      >
                        +
                      </button>
                    </div>
                    <p className="cajaPage_producto_texto">
                      $
                      {elemento.cantidad >= 1
                        ? elemento.cantidad * elemento.precio
                        : elemento.precio}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* Division en la que se ve el total */}
            {/* <VistaTotal total={this.state.total} /> */}
            <div className="cajaPage_Total">
              <p>Total </p>
              <p className="cajaPage_Total_valor">${this.state.total}</p>
            </div>
            <div className="cajaPage_Botones">
              <Button
                variant="outlined"
                style={{ height: "50px", width: "130px" }}
                onClick={() => {
                  this.setState({
                    carro: [],
                  });
                  this.setState({
                    total: 0,
                  });
                }}
              >
                Limpiar
              </Button>
              <Button
                variant="contained"
                style={{ height: "50px", width: "130px" }}
                onClick={() => {
                  // Para redirigir a la vista de pago.
                  this.setState({ toPago: true });
                }}
              >
                Pagar
              </Button>
            </div>
          </section>
        </h1>

        {this.state.toPago ? <Navigate to={PrivateUrls.pago} /> : null}
      </section>
    ) : (
      <Menu></Menu>
    );
  }
}

// PropTypes.
CajaPage.propTypes = {
  userInfo: PropTypes.object,
};

// Exportación de la pagina: Index.
export default CajaPage;
