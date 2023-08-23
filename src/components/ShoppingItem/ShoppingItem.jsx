import "./ShoppingItem.css";
import { useState } from "react";

const ShoppingItem = ({ id, nombre, tipo, image }) => {
  const [selled, setSelled] = useState(false);

  const sellHanled = () => {
    setSelled(true);
  };

  return (
    <>
      <div className="ShoppingItem">
        <h4>Nombre:{nombre}</h4>
        <p>Tipo:{tipo}</p>
        <img src={image} alt="Imagen de manzana para las tarjetas" />
        {selled ? (
          <span>Vendido</span>
        ) : (
          <button onClick={sellHanled}>Vender</button>
        )}
      </div>
    </>
  );
};

export default ShoppingItem;
