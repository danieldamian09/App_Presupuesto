import React, { useState } from 'react';

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    const agregarGasto = e => {
        e.preventDefault();

        // validar


        // construir el gasto


        // pasar el gasto al componente principal


        // resetear el formulario
    
    }


    return (
        <form

            onSubmit={agregarGasto}
        
        >

            <h2>Agrega tus gastos aqui</h2>

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
                    onChange={e => guardarCantidad( parseInt(e.target.value) )}
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

export default Formulario;