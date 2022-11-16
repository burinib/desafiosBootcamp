import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './ComponenteB';



const ComponenteA = ( {perfil} ) => {

    return (
        <div>
        <h2>Nombre:{perfil?.name}</h2>
        <h2>Apellido:{perfil?.surname}</h2>
        <h2>Mail:{perfil?.email}</h2>
        <ComponenteB conexion={perfil?.conectado}/>
        </div>
    )
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf()
};


export default ComponenteA;
