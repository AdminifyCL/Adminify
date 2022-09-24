import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import fakeElements from "../../models/fakeElements.js";
import { collection, getDocs,doc} from "firebase/firestore";
import {firestore} from "../../database/config.js"
import {CajaProductos} from "./CajaProductos.jsx"
import {CajaCarro} from "./CajaCarro.jsx"
import {CajaCajero} from "./CajaCajero.jsx"
import {CajaTotal} from "./CajaTotal.jsx"
import {CajaBotones} from "./CajaBotones.jsx"

// Importación de estilos.
import "./CajaPage.scss";

const FuncionComponente = (props)=>{

    const [total,setTotal]= useState(0)
    const [carrito,setCarrito]= useState([])
    const [entrada,setEntrada]= useState("")

    const cambiarTotal = (valor)=>{
        setTotal(total+valor)
    }

    const cambiarCarro = (index,nombre,precio,cantidad)=>{
      setCarrito([...carrito,{index,nombre,precio,cantidad}]);
    }

    const limpiar = () => {
      setTotal(0);
      setCarrito([]);
    };

    const cambiarCantidad = (cantidad, valor, nombre, suma) => {
      setCarrito(
        carrito.map((item) => {
          if (cantidad >= 1) {
            if (suma) {
              cambiarTotal(valor);
            } else {
              if (cantidad > 1) {
                cambiarTotal(valor * -1);
              }
            }
          }
          if (item.nombre == nombre) {
            if (suma) {
              item.cantidad = item.cantidad + 1;
            } else {
              if (cantidad > 1) {
                item.cantidad = item.cantidad - 1;
              }
            }
          }
          return item;
        })
      );
    };

    return (
      <section className="cajaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cajaPage_navigation">
          <TabNavigation />
        </section>
        {/* Vista de la caja. */}
        <section className="cajaPage_content">
          <CajaProductos
            total={total}
            productos={productos}
            carro={[...carrito]}
            cambiaCarro={cambiarCarro}
            cambiaTotal={cambiarTotal}
            cambiaCantidad={cambiarCantidad}
          ></CajaProductos>

          <CajaCarro carro={carrito} cambiaCantidad={cambiarCantidad}></CajaCarro>

          <CajaCajero></CajaCajero>

          <CajaTotal total={total}></CajaTotal>

          <CajaBotones limpia={limpiar}></CajaBotones>

        </section>
      </section>
    );
}

// PropTypes.
FuncionComponente.propTypes = {};

// Exportación de la pagina: Index.
export default FuncionComponente;

// const productos = [...fakeElements];
// const productos = [];
// // const subcolref = collection(firestore,"PRODUCTOS","6Naf9vEr6z11pPEdsGW9","PRODUCTO")
// const fetchProducts = async (tiendaId) => {
//   // Fetch
//   try {
//     let listaProductos = [];
//     // Consulta a la base de datos.
//     const productoPath = `PRODUCTOS/${tiendaId}/PRODUCTO`;
//     const productoRef = collection(firestore, productoPath);

//     const productoDocs = await getDocs(productoRef);
//     productoDocs.forEach((documento) => {
//       if (documento.exists()) {
//         const producto = documento.data();
//         listaProductos.push(producto);
//       }
//     });
//     return listaProductos
//   } catch (error) {
//     console.log("Error")
//   }
// };

// // Definición de la pagina: Index.
// class CajaPage extends Component {
//   // -- Constructor.
//   constructor(props) {
//     super(props);
//     this.state = { total: 0 , carro : [], finder :""};
//   }

//   // Funciones para cambiar valores desde los componentes
  
//   // traerDatos = async ()=>{
//   //   const datos = await getDocs(subcolref)
//   //   datos.forEach(doc=>{console.log(doc.data().nombre)})
//   //   }
  
//   cambiarTotal = (valor)=>{this.setState({total: this.state.total+valor})}
//   cambiarCarro = (n_index,n_nombre,n_precio)=>{
//     this.setState({carro: [...this.state.carro,{
//           index: n_index,
//           nombre: n_nombre,
//           precio: n_precio,
//           cantidad: 1,
//         }
//       ],
//     })
//   }
//   limpiar = ()=>{
//     this.setState({carro:[],total:0})
//   }
//   cambiarCantidad = (cantidad,valor,nombre,suma)=>{this.setState({
//     carro: this.state.carro.map((item) => {
//       if (cantidad >= 1) {
//         if (suma) {
//           this.setState({ total: this.state.total + valor });
//         } else {
//           if (cantidad > 1) {
//             this.setState({ total: this.state.total - valor });
//           }
//         }
//       }
//       if (item.nombre == nombre) {
//         if (suma) {
//           item.cantidad = item.cantidad + 1;
//         } else {
//           if (cantidad > 1) {
//             item.cantidad = item.cantidad - 1;
//           }
//         }    
//       }
//       return item;
//     }),
//   });}

//   // -- Ciclo de vida del componente.
//   componentDidMount() {
//     const datos = this.props.getData("6Naf9vEr6z11pPEdsGW9")
//     console.log(datos)
//   }
//   componentDidUpdate(prevProps, prevState) {}
//   componentWillUnmount() {}

//   // -- Métodos.
//   // -- Métodos [REDIRECT].
//   // -- Métodos [HANDLER].
//   // -- Métodos [MAPPING].

//   // Renderizado.
//   render(){
//     return (
//       <section className="cajaPage_container">
//         {/* Navegación de la aplicación. */}
//         <section className="cajaPage_navigation">
//           <TabNavigation />
//         </section>
//         {/* Vista de la caja. */}
//         <section className="cajaPage_content">
//           {/* Division en la que se ven los productos */}
//           <CajaProductos
//             total={this.state.total}
//             productos={productos}
//             carro={[...this.state.carro]}
//             cambiaCarro={this.cambiarCarro}
//             cambiaTotal={this.cambiarTotal}
//             cambiaCantidad={this.cambiarCantidad}
//           ></CajaProductos>
//           <CajaCarro carro={this.state.carro} cambiaCantidad ={this.cambiarCantidad}></CajaCarro>
//           <CajaCajero></CajaCajero>
//           <CajaTotal total={this.state.total}></CajaTotal>
//           <CajaBotones limpia={this.limpiar}></CajaBotones>
//         </section>
//       </section>
//     );
//   }
// }

// // PropTypes.
// CajaPage.propTypes = {
//   userInfo: PropTypes.object,
// };

// // Exportación de la pagina: Index.
// export default CajaPage;