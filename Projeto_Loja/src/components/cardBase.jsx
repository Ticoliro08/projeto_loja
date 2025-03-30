import "./cardBase.css";
import { useState, useEffect } from "react";

function Card(props) {
  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    console.log("Favoritos atualizados:", favoritos); // Log para depuração
  }, [favoritos]);

  const adicionarAFavoritos = () => {
    setFavoritos((prev) => {
      if (prev.includes(props.nomeProduto)) {
        console.log(`Removendo ${props.nomeProduto} dos favoritos`); // Log para depuração
        return prev.filter(favorito => favorito !== props.nomeProduto);
      } else {
        console.log(`Adicionando ${props.nomeProduto} aos favoritos`); // Log para depuração
        return [...prev, props.nomeProduto];
      }
    });
  };

  const isFavorito = favoritos.includes(props.nomeProduto);

  return (
    <>
      <section className="blocoCard">
        <section className="blocoTextos">
          <img className="imagemVia" src={props.imagem} alt={props.nomeProduto} />
          <h2>{props.nomeProduto}</h2>
        </section>
        <section className="blocoCard2">
          <label className="container">
            <input
              type="checkbox"
              checked={isFavorito}
              onChange={adicionarAFavoritos}
            />
            <div className="checkmark">
              <svg viewBox="0 0 256 256">
                <rect fill="none" height="256" width="256"></rect>
                <path
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  strokeWidth="20"
                  fill={isFavorito ? "rgb(236, 25, 25)" : "gray"}
                ></path>
              </svg>
            </div>
          </label>
        </section>
        <p className="valor">{props.valor}</p>
      </section>
    </>
  );
}

export default Card;