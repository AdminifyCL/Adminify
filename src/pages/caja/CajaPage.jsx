// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import fakeElements from "../../models/fakeElements.js";
import { collection, getDocs } from "firebase/firestore";
import {firestore} from "../../database/config.js"
import {CajaProductos} from "./CajaProductos.jsx"
import {CajaCarro} from "./CajaCarro.jsx"
import {CajaCajero} from "./CajaCajero.jsx"
import {CajaTotal} from "./CajaTotal.jsx"
import {CajaBotones} from "./CajaBotones.jsx"

// Importación de estilos.
import "./CajaPage.scss";

const productos = [...fakeElements];

// const getData = ()=>{ return getDocs(collection(firestore,'TIENDAS'))}


// Definición de la pagina: Index.
class CajaPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    this.state = { total: 0 , carro : [], finder :"", pago: true};
  }

  // Funciones para cambiar valores desde los componentes
  cambiarTotal = (valor)=>{this.setState({total: this.state.total+valor})}
  cambiarCarro = (n_index,n_nombre,n_precio)=>{
    this.setState({carro: [...this.state.carro,{
          index: n_index,
          nombre: n_nombre,
          precio: n_precio,
          cantidad: 1,
        }
      ],
    })
  }
  limpiar = ()=>{
    this.setState({carro:[],total:0})
  }
  cambiarCantidad = (cantidad,valor,nombre)=>{this.setState({
    carro: this.state.carro.map((item) => {
      if ( cantidad > 1) {
        this.setState({ total: this.state.total + valor });
      }
      if (item.nombre == nombre) {
        item.cantidad = item.cantidad + 1;
      }
      return item;
    }),
  });}

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // Renderizado.
  render( async ) {
    return (
      <section className="cajaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cajaPage_navigation">
          <TabNavigation />
        </section>
        {/* Vista de la caja. */}
        <section className="cajaPage_content">
          {/* Division en la que se ven los productos */}
          <CajaProductos
            total={this.state.total}
            productos={productos}
            carro={[...this.state.carro]}
            cambiaCarro={this.cambiarCarro}
            cambiaTotal={this.cambiarTotal}
            cambiaCantidad={this.cambiarCantidad}
          ></CajaProductos>
          <CajaCarro carro={this.state.carro}></CajaCarro>
          {/*<div className="cajaPage_Carro">
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
                      <button style={{padding:"0px 0px 4px 0px"}}
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

                      <p style={{margin: "1px 5px 1px 5px",width:"20%"}}> {elemento.cantidad >= 1 ? elemento.cantidad : 1} </p>

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
            </div> */}
          <CajaCajero></CajaCajero>
          <CajaTotal total={this.state.total}></CajaTotal>
          <CajaBotones limpia={this.limpiar}></CajaBotones>
        </section>
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
