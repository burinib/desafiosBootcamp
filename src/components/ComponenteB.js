import React from "react";

const ComponenteB = ({conexion}) => {
  return (
    <div>
      <h3>Conectado:{conexion? "Conectado" : "Desconectado"}</h3>
    </div>
  );
};

ComponenteB.propTypes = {};

export default ComponenteB;
