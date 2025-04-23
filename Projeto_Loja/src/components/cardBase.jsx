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
    const isFavorito = favoritos.some(favorito => favorito.nome === props.nomeProduto);
    if (isFavorito) {
      // Remove do favoritos
      const novosFavoritos = favoritos.filter(favorito => favorito.nome !== props.nomeProduto);
      setFavoritos(novosFavoritos);
    } else {
      // Adiciona aos favoritos
      const novoFavorito = { 
        nome: props.nomeProduto,
        imagem: props.imagem,
        valor: props.valor // Armazena o valor do produto
      };
      setFavoritos([...favoritos, novoFavorito]);
    }
  };

  const adicionarOuRemoverDoCarrinho = () => {
    const isNoCarrinho = carrinho.some(item => item.nome === props.nomeProduto);
    if (isNoCarrinho) {
      // Remove do carrinho
      console.log(`Removendo ${props.nomeProduto} do carrinho`); // Log para depuração
      const novosCarrinho = carrinho.filter(item => item.nome !== props.nomeProduto);
      setCarrinho(novosCarrinho);
    } else {
      // Adiciona ao carrinho
      console.log(`Adicionando ${props.nomeProduto} ao carrinho`); // Log para depuração
      const novoItem = { 
        nome: props.nomeProduto,
        imagem: props.imagem,
        valor: props.valor // Armazena o valor do produto
      };
      setCarrinho([...carrinho, novoItem]);
    }
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
            {isNoCarrinho ? <i className='bx bxs-cart'></i> : <i className='bx bx-cart'></i>}
          </button>
        </section>
        <p className="valor"> R${props.valor}</p>
      </section>
    </>
  );
}

export default Card;