import "./cardBase.css"
import { useState, useEffect } from "react"



function Card (props) {
  const [checked, setChecked] = useState(true);

    const [liked, setLiked] = useState(false);


  useEffect(() => {
    const likee = localStorage.getItem("liked");
    const checkedd = localStorage.getItem("checked");
    if (likee) {
      setChecked(JSON.parse(checkedd));
      const timer = setTimeout(() => {
        setLiked(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [liked]);

      

    return (
        <>
        <section className="blocoCard">
        <section className="blocoTextos">
            <img className="imagemVia" src={props.imagem}></img>
                <h2>{props.nomeProduto}</h2>
                <p>{props.descricao}</p>
            </section>
            <section className="blocoCard2">

      <label className="container">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          setLiked(true);
          localStorage.setItem("liked", true);
          localStorage.setItem("checked", !checked);
        }}
      />
      <div className="checkmark">
        <svg viewBox="0 0 256 256">
          <rect fill="none" height="256" width="256"></rect>
          <path
            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
            strokeWidth="20"
            stroke="#000"
            fill={checked ? "#808080" : "  #ff5353"} 
          ></path>
        </svg>
      </div>
    </label>

            </section>
            <p className="valor">{props.valor}</p>
        </section>

        </>
    )

}

export default Card