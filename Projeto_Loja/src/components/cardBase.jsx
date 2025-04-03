import "./cardBase.css";
import { useState, useEffect } from "react";

function Card(props) {
  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });

  const [carrinho, setCarrinho] = useState(() => {
    const storedCarrinho = localStorage.getItem('carrinho');
    return storedCarrinho ? JSON.parse(storedCarrinho) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

  }, [favoritos, carrinho]);

  const adicionarAFavoritos = () => {
    setFavoritos((prev) => {
      const isFavorito = prev.some(favorito => favorito.nome === props.nomeProduto);
      if (isFavorito) {
        return prev.filter(favorito => favorito.nome !== props.nomeProduto);
      } else {
        return [...prev, { 
          nome: props.nomeProduto,
          imagem: props.imagem,
          valor: props.valor // Armazena o valor do produto
        }];
      }
    });
  };

  const adicionarOuRemoverDoCarrinho = () => {
    setCarrinho((prev) => {
      const isNoCarrinho = prev.some(item => item.nome === props.nomeProduto);
      if (isNoCarrinho) {
        console.log(`Removendo ${props.nomeProduto} do carrinho`); // Log para depuração
        return prev.filter(item => item.nome !== props.nomeProduto); // Remove do carrinho
      } else {
        console.log(`Adicionando ${props.nomeProduto} ao carrinho`); // Log para depuração
        return [...prev, { 
          nome: props.nomeProduto,
          imagem: props.imagem,
          valor: props.valor // Armazena o valor do produto
        }];
      }
    });
  };

  const isFavorito = favoritos.some(favorito => favorito.nome === props.nomeProduto);
  const isNoCarrinho = carrinho.some(item => item.nome === props.nomeProduto);

  return (
    <>
      <section className="blocoCard">
        <section className="blocoTextos">
          <img className="imagemVia" src={props.imagem} alt={props.nomeProduto} />
          <h2>{props.nomeProduto}</h2>
        </section>
        <section className="blocoCard2">
          <button className="botaoCurtida" onClick={adicionarAFavoritos}>
            {isFavorito ? <i className='bx bxs-heart'></i> : <i className='bx bx-heart'></i>}
          </button>
          <button className="botaoCarrinho" onClick={adicionarOuRemoverDoCarrinho}>
            {isNoCarrinho ?  <i class='bx bxs-cart' ></i> : <i class='bx bx-cart' ></i> }
          </button>
        </section>
        <p className="valor"> R${props.valor}</p>
      </section>
    </>
  );
}

export default Card;