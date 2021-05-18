import React, { useState } from 'react';

const Formulario = () => {
    return (
        <form>
            <h2>Agrega tus gastos aqui</h2>

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input
                    type="text"
                    class="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input
                    type="number"
                    class="u-full-width"
                    placeholder="Ej. 400"
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