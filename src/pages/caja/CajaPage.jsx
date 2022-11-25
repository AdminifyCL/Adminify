// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CajaProductos } from "./components/Producto/CajaProductos.jsx";
import { CajaCarro } from "./components/Carro/CajaCarro.jsx";
import { CajaCierre } from "./components/Cierre/CajaCierre.jsx";
import { CajaBoleta } from "./components/Cierre/CajaBoleta.jsx";
import { CajaTotal } from "./components/Total/CajaTotal.jsx";
import { CajaBotones } from "./components/Botones/CajaBotones.jsx";
import { CajaModal } from "./components/Modal/CajaModal.jsx";
import { useNavigate } from "react-router-dom";
import { privateURL } from "../../schemas/Navigation.js";

// Actions.
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";
import { clearMetodo } from "../../redux/slices/ventasSlice.js";
import { clearCarro } from "../../redux/slices/productosSlice.js";

// Importación de estilos.
import "./CajaPage.scss";
import { Button } from "@mui/material";

// Definición del componente: <CajaPage />
const CajaPage = (props) => {
  // -- Manejo del estado.
  const {
    productos,
    sendCarrito,
    statusCaja,
    setStatus,
    horaApertura,
    horaCierre,
    handleCierre,
    handleApertura,
    handleDisplayAlert,
    ventas,
  } = props;
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [canPay, setCanPay] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [confirmacion, setConfirmacion] = useState(false);
  const [datosBoleta, setDatos] = useState({
    cajero: "",
    efectivo: 0,
    debito: 0,
    credito: 0,
    total: 0,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -- Ciclo de vida.
  useEffect(() => {
    if (carrito.length > 0) {
      setCanPay(true);
    } else {
      setCanPay(false);
    }
  }, [carrito]);

  useEffect(() => {
    dispatch(clearMetodo());
    dispatch(clearCarro());
    if (typeof horaApertura == "string") {
      console.log("Aqui tira error");
    }
  }, []);

  // -- Metodos.
  const cambiarTotal = (valor) => {
    setTotal(total + valor);
  };

  const cambiarCarrito = (id, nombre, precio, cantidad) => {
    setCarrito([...carrito, { id, nombre, precio, cantidad }]);
  };

  const limpiarCarrito = () => {
    setTotal(0);
    setCarrito([]);
  };

  const cambiarCantidad = (id, cantidad, valor, nombre, suma) => {
    const carro = [...carrito];
    carro.map((item) => {
      if (item.id == id) {
        if (suma) {
          item.cantidad = item.cantidad + 1;
          setTotal(total + valor);
        } else {
          if (cantidad >= 0) {
            item.cantidad = item.cantidad - 1;
            setTotal(total - valor);
          }
        }
      }
    });
  };

  const enviarCarrito = () => {
    // Enviar los productos del carrito a REDUX.

    let total = carrito.length;

    if (total > 0) {
      setCanPay(true);
      sendCarrito(carrito);

      // Redirigir al pago.
      navigate(privateURL.pago);
    } else {
      setCanPay(false);

      let newAlert = {
        type: "error",
        title: "Carrito vacío",
        message: "El carrito está vacío, no se puede realizar la venta",
      };

      triggerAlert(newAlert);
    }
  };

  const cerrarModal = () => {
    setModalVisibility(!modalVisibility);
  };

  const handleConfirmacion = () => {
    setConfirmacion(!confirmacion);
  };

  const borrarDelCarro = () => {
    const carro = [...carrito];
    const carroFiltrado = carro.filter((item) => item.cantidad > 0);
    setCarrito([...carroFiltrado]);
  };

  const bloquearCaja = () => {
    setCarrito([]);
    setTotal(0);
    if (statusCaja) {
      setStatus("close");
      handleCierre();
      handleConfirmacion();
    } else {
      setStatus("open");
      handleApertura();
      handleDisplayAlert();
    }
  };

  const generarBoleta = () => {
    const apertura = horaApertura.getTime() / 1000 - 3600; // QUITARLE UNA HORA A LA APERTURA
    const cierre = horaCierre.getTime() / 1000;
    const ventasDelUsuario = ventas.filter((venta) => venta.fecha.seconds > apertura);

    const datosBoleta = { cajero: "", efectivo: 0, debito: 0, credito: 0, total: 0 };
    ventasDelUsuario.forEach((venta) => {
      if (venta.metodo == "efectivo") {
        datosBoleta.efectivo = datosBoleta.efectivo + venta.total;
      }
      if (venta.metodo == "debito") {
        datosBoleta.debito = datosBoleta.debito + venta.total;
      }
      if (venta.metodo == "credito") {
        datosBoleta.credito = datosBoleta.credito + venta.total;
      }
      datosBoleta.total = datosBoleta.total + venta.total;
      datosBoleta.cajero = venta.vendedor.nombre;
    });
    setDatos(datosBoleta);
  };

  // -- Renderizado.
  return (
    <section className="cajaPage_container">
      {/* Vista de la caja. */}
      <section className="cajaPage_content">
        <CajaCierre
          block={statusCaja}
          open={modalVisibility}
          cerrarModal={cerrarModal}
          bloquearCaja={bloquearCaja}
          abrirCaja={handleApertura}
          cerrarCaja={handleCierre}
          generarBoleta={generarBoleta}
          handleConfirmacion={handleConfirmacion}
        />

        {/* Boleta de fin de turno */}
        <CajaBoleta
          fecha={horaCierre}
          datos={datosBoleta}
          apertura={horaApertura}
          cierre={horaCierre}
          generarBoleta={generarBoleta}
          handleConfirmacion={handleConfirmacion}
          confirmacion={confirmacion}
        ></CajaBoleta>

        {/* Lista de los productos */}
        <CajaProductos
          total={total}
          productos={productos}
          carrito={[...carrito]}
          cambiarCarrito={cambiarCarrito}
          cambiarTotal={cambiarTotal}
          cambiarCantidad={cambiarCantidad}
          block={statusCaja}
        />

        {/* Carrito de compra. */}
        <CajaCarro
          carrito={carrito}
          cambiarCantidad={cambiarCantidad}
          borrarDelCarrito={borrarDelCarro}
          block={statusCaja}
        />

        {/* Total */}
        <CajaTotal total={total} block={statusCaja} />

        {/* Botones. */}
        <CajaBotones
          limpia={limpiarCarrito}
          carrito={carrito}
          sendCarrito={enviarCarrito}
          canPay={canPay}
          block={statusCaja}
        />

        {/* Boton de cierre de caja */}
        <CajaModal verModal={setModalVisibility}></CajaModal>
      </section>
    </section>
  );
};

// Exportación de la pagina: Index.
export default CajaPage;
