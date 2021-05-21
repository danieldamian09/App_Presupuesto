import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from "./components/Formulario";

function App() {

  // definir monto del presupuesto en el estado
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  // estado para mostrar el componente Pregunta condicionado (depende de si ya se definio un presupuesto)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGasto] = useState([]);

  // funcion cuando se agrega un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGasto([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta
            ? (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            )
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  2
                  </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  )
}

export default App;
