import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({ guardarNuevoGasto, guardarCrearGasto }) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false)

        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        // pasar el gasto al componente principal
        guardarNuevoGasto(gasto);
        guardarCrearGasto(true);


        // resetear el formulario
        guardarNombre('');
        guardarCantidad(0);


    }


    return (
        <form

            onSubmit={agregarGasto}

        >

            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios " /> : null}

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 400"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarNuevoGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;