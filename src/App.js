import { useState } from "react";
import "./App.css";

function App() {

  // Manejar los estados
  const [descripcion, setDescripcion] = useState("Descripcion inicial")
  const [chiste, setChiste] = useState("Chiste inicial")

  const onChangeDesc = (event) =>{
    setDescripcion(event.target.value)
  }

  const selectPicker = (
    <select>
      <option value="fire">Casa en llamas</option>
      <option value="futu">Futurama</option>
      <option value="hist">History channel</option>
      <option value="matr">Matrix</option>
      <option value="phil">Philosoraptor</option>
      <option value="smar">Smart guy</option>
    </select>
  );

  const cajaDesc = (
    <input onChange={onChangeDesc} type="text" placeholder="Ingresa descripcion"></input>
  )

  const cajaRem = (
    <input type="text" placeholder="Ingresa el chiste"></input>
  )

  const estructura = (
   <div>
     <span>{descripcion}</span>
     <br></br>
     <span>{chiste}</span>
     <img src=""></img>
   </div>
  )

  const boton = ( <button>Exportar</button>)
  return (
    <div className="App">
      {/* Select picker de memes */}

      {selectPicker}
      <br></br>

      {/* Input text primera linea */}
      {cajaDesc}
      <br></br>

      {/* Input text segunda linea */}
      {cajaRem}
      <br></br>

      {/* boton de exportar*/}
      {boton}

      {/* Estructura del meme*/}
      {estructura}

    </div>
  );
}

export default App;
