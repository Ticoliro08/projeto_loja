import React, { useEffect, useState } from 'react';
import './carrinho.css'; // Adicione seu CSS aqui

// Componentes
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

function Carrinho() {
  const [carrinho, setCarrinho] = useState(() => {
    const storedCarrinho = localStorage.getItem('carrinho');
    return storedCarrinho ? JSON.parse(storedCarrinho) : [];
  });

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + parseFloat(item.valor), 0).toFixed(2);
  };

  const removerDoCarrinho = (nomeProduto) => {
    const novoCarrinho = carrinho.filter(item => item.nome !== nomeProduto);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  return (
    <>
    <Header />
    <Navbar />
    <div className="carrinho">
      <h1>Carrinho de Compras</h1>
      {carrinho.length === 0 ? (
        <p className='vazio'>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                <img src={item.imagem} alt={item.nome} />
                <h2>{item.nome}</h2>
                <p className='preco'>Preço: R$ {item.valor}</p>
                <button onClick={() => removerDoCarrinho(item.nome)}>Remover</button>
              </li>
            ))}
          </ul>
          <h2>Valor Total: R$ {calcularTotal()}</h2>
        </div>
      )}
    </div>
    <Footer />
    </>

  );
}

export default Carrinho;