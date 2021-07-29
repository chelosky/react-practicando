import React from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo}) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/* <h1>Hola Mundo</h1> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Relleno'
}

export default PrimeraApp;