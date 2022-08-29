// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import fakeElements from "../../models/fakeElements.js";
import {VistaTotal} from "./VistaTotal";
import { Button } from "@mui/material";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import { getDatabase } from "firebase/database"

// Importación de estilos.
import "./CajaPage.scss";
import { width } from "@mui/system";

const productos = [...fakeElements];
const data = getDatabase()

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Definición de la pagina: Index.
class CajaPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    this.state = { total: 0 , carro : [], finder :""};
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
            <h1 className="cajaPage_titulo"> Sistema de caja </h1>
            {/* Division en la que se ven los productos */}
            <div className="cajaPage_Productos">
              <input
                type={"search"}
                className="cajaPage_Buscador"
                onChange={(e) => {
                  this.setState({ finder: e.target.value });
                }}
              ></input>
              {productos.map((producto) => {
                if (producto.nombre.startsWith(this.state.finder.toUpperCase())) {
                return (
                  <div className="cajaPage_Productos_producto">
                    <FaHamburger></FaHamburger>
                    {/*}<p className="cajaPage_producto_texto">{producto.icono}</p>{*/}
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
                          this.setState({total: this.state.total+producto.valor})
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
                          })
                        }
                      }}
                    >
                      Añadir
                    </Button>
                  </div>
                );}
              })}
            </div>

            {/* Division en la que se ve el carro */}
            <div className="cajaPage_Carro">
              {/*}<h1 className="cajaPage_Carro_titulo"> Carro de compras </h1>{*/}
              {this.state.carro.map((elemento) => {
                return (
                  <div className="cajaPage_Carro_producto">
                    <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
                      {elemento.nombre}
                    </p>
                    <div className="cajaPage_carro_cantidad">
                      
                      <button className="cajaPage_carro_boton" onClick={()=>{
                        this.setState({ carro : this.state.carro.map((item)=>{
                          if (item.nombre == elemento.nombre){
                            item.cantidad = item.cantidad+1}
                          return item}) });
                        this.setState({total: this.state.total+elemento.precio})
                      }}>+</button>

                      <p> {(elemento.cantidad>=1)? elemento.cantidad: 1} </p>

                      <button className="cajaPage_carro_boton"onClick={()=>{
                        this.setState({ carro : this.state.carro.map((item)=>{
                          if (elemento.cantidad>1){this.setState({ total: this.state.total - elemento.precio });}
                          if ((item.nombre == elemento.nombre)){
                            item.cantidad = (item.cantidad-1>0)? item.cantidad-1 : 1}
                          return item}) });
                      }}>-</button>
                    </div>
                    <p className="cajaPage_producto_texto">${(elemento.cantidad>=1)? elemento.cantidad*elemento.precio: elemento.precio}</p>
                  </div>
                );
              })}
            </div>
            {/* Division en la que se ve el total */}
            {/* <VistaTotal total={this.state.total} /> */}
            <div className="cajaPage_Total">Total : ${this.state.total}</div>
            <div className="cajaPage_Botones">
              <Button
                variant="contained"
                style={{ height: "60px", width: "130px" }}
                onClick={() => {
                  alert("Esta entrando al menu de pago...");
                  console.log(this.state.carro)
                }}
              >
                Pagar
              </Button>
              <Button
                variant="outlined"
                style={{ height: "60px", width: "130px" }}
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
