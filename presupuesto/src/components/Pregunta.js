import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

    // Definir el state
    const [cantidad, guardarCantidad] = useState(0);
    // Para Validar
    const [error, guardarError] = useState(false);

    // Funcion que lee el preupuesto
    const definirPresupuesto = e => {
        // console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        // prevenir la carga de la pagina cuando ocurra el evento submit
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }


        // Que vamos  a hacer si la validacion es correcta
        guardarError(false);
        // guardamos el presupuesto
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)

    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {/* operador ternario para mostrar un mensaje */}
            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;