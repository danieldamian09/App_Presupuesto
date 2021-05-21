import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from "./components/Formulario";
import Listado from './components/Listado';
import Controlpresupuesto from './components/Controlpresupuesto';

function App() {

  // definir monto del presupuesto en el estado
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  // estado para mostrar el componente Pregunta condicionado (depende de si ya se definio un presupuesto)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGasto] = useState([]);
  const [gasto, guardarNuevoGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false);

  // useEffect para actualizar el restante
  useEffect(() => {
    if (crearGasto) {
      // agrega el nuevo presupuesto
      guardarGasto([
        ...gastos,
        gasto
      ])

      // para restar del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // resetear a false
      guardarCrearGasto(false)

    }
  }, [crearGasto, gasto, gastos, restante]);



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
                    guardarNuevoGasto={guardarNuevoGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <Controlpresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
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
