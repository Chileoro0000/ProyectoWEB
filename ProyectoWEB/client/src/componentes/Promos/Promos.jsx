import { useState, useEffect } from "react"
import "./Promos.css"
import axios from "axios"

export function Promos() {
  const [Promos, setPromos] = useState([])
  const LoadPromos = () => {
    fetch("http://localhost:5005/promos")
      .then(res => res.json())
      .then(TodosPromos => setPromos(TodosPromos))
  }
  
  LoadPromos()
  return (
    <div>
      <br></br>
      <h2 id="textoPromo">PROMOS</h2>
      <div className="contenedorPromos">
        {Promos.map(eachPromo => {
          return (
            <div id="promo">
              <div className="imgPromo"> <img id="IMGPromo" src={eachPromo.imagenURL} /></div>
              <div className="descContain1">
                <p id="nombrePromo"> {(eachPromo.nombre)}</p>
                <p id="tipoPromo"> {eachPromo.tipo}</p>
              </div>
              <div className="precioPromo">
                <span id="precioPromo">${(eachPromo.precio)}</span>
              </div>
              <div className="cardButtonPromo">
                {!eachPromo.EnCarro ? (
                  <button className="button" >Agregar al carro</button>
                ) : (
                  <button>En el carro</button>
                )}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}