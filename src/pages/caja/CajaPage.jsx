// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import fakeElements from "../../models/fakeElements.js";
import {VistaTotal} from "./VistaTotal";
import { Button } from "@mui/material";
import { FaHamburger, FaHotdog } from "react-icons/fa";

// Importación de estilos.
import "./CajaPage.scss";
import { width } from "@mui/system";

const productos = [...fakeElements];

// Definición de la pagina: Index.
class CajaPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    this.state = { total: 0 , carro : [], finder :" "};
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
    return (
      <section className="cajaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cajaPage_navigation">
          <TabNavigation />
        </section>
        <h1>
          {/* Vista de la caja. */}
          <section className="cajaPage_content">
          <h1 className="titulo"> Sistema de caja </h1>
            {/* Division en la que se ven los productos */}
            <div className="cajaPage_Productos">
              <input type={"search"} className="Buscador" onChange={e=>{
                this.setState( {finder : e.target.value} )
                }}></input>
              {productos.map((producto) => {
                if (producto.nombre.match(this.state.finder) !== null) {
                  return (
                    <div className="cajaPage_Productos_producto">
                      <FaHamburger></FaHamburger>
                      {/*}<p className="cajaPage_producto_texto">{producto.icono}</p>{*/}
                      <p className="cajaPage_producto_texto" style={{ width: "40%" }}>{producto.nombre}</p>
                      <p className="cajaPage_producto_texto">${producto.valor}</p>
                      <Button
                        variant="contained"
                        onClick={() => {
                          this.setState({ total: this.state.total + producto.valor });
                          this.setState({
                            carro: [
                              ...this.state.carro,
                              {
                                index: this.state.carro.length,
                                nombre: producto.nombre,
                                precio: producto.valor,
                              },
                            ],
                          });
                        }}
                      >
                        Añadir
                      </Button>
                    </div>
                  );
                } else {
                  console.log("No existen coincidencias...");
                }
              }
              )
              }
            </div>

            {/* Division en la que se ve el carro */}
            <div className="cajaPage_Carro">
              {/*}<h1 className="cajaPage_Carro_titulo"> Carro de compras </h1>{*/}
              {this.state.carro.map((elemento) => {
                return (
                  <p className="cajaPage_Carro_producto">
                    <p className="cajaPage_producto_texto" style={{ width: "40%" }}>{elemento.nombre}</p>
                    <p className="cajaPage_producto_texto"> 1 </p>
                    <p className="cajaPage_producto_texto">${elemento.precio}</p>
                    <Button variant="outlined"
                      onClick={() => {
                        this.setState({
                          carro: this.state.carro.filter(item => item.index !== elemento.index )
                        })
                        this.setState({ total: this.state.total - elemento.precio })
                      }}
                    >
                      Quitar
                    </Button>
                  </p>
                );
              })}
            </div>
            {/* Division en la que se ve el total */}
            <VistaTotal total={this.state.total} />
            <div className="cajaPage_Botones">
            <Button variant="contained" style={{height:"60px",width:"130px"}} onClick={()=>{
              alert("Esta entrando al menu de pago...")
            }}>Pagar</Button>
            <Button variant="outlined" style={{height:"60px",width:"130px"}} onClick={()=>{
              this.setState({
                carro: []
              })
              this.setState({
                total: 0,
              });
            }}>Limpiar</Button>
            </div>
          </section>
        </h1>
      </section>
    );
  }
}

// PropTypes.
CajaPage.propTypes = {
  userInfo: PropTypes.object,
};

// Exportación de la pagina: Index.
export default CajaPage;
