import { useState } from "react";
import "./App.css";

function App() {

  // Manejar los estados
  const [descripcion, setDescripcion] = useState("Descripcion inicial")
  const [chiste, setChiste] = useState("Chiste inicial")
  const [img, setImg] = useState()

  const onChangeDesc = (event) =>{
    setDescripcion(event.target.value)
  }

  const onChangeChiste = (event) =>{
    setChiste(event.target.value)
  }

  const onChangeImg = (event) =>{
    setImg(event.target.value)
    alert(event.target.value)
  }

  const selectPicker = (
    <select onChange={onChangeImg}>
      <option value="fire">Casa en llamas</option>
      <option value="futu">Futurama</option>
      <option value="hist">History channel</option>
      <option value="matr">Matrix</option>
      <option value="phil">Philosoraptor</option>
      <option value="smar">Smart guy</option>
    </select>
  );
  //http://localhost:3000/img/hist.jpg

  const cajaDesc = (
    <input onChange={onChangeDesc} type="text" placeholder="Ingresa descripcion"></input>
  )

  const cajaRem = (
    <input onChange={onChangeChiste} type="text" placeholder="Ingresa el chiste"></input>
  )

  const estructura = (
   <div>
     <span>{descripcion}</span>
     <br></br>
     <span>{chiste}</span>
     <img src={"/img/"+img+".jpg"}></img>
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
