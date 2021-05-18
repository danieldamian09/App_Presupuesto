import React, { useState } from 'react';
import Pregunta from './components/Pregunta';

function App() {

  // definir monto del presupuesto en el estado
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          />
        </div>
        <div className="row">
          <div className="one-half column">
            1
          </div>
          <div className="one-half column">
            1
          </div>
        </div>
      </header>
    </div>
  )
}

export default App;
