import React, { useState } from 'react';
import './favoritos.css'; // Importe o CSS para estilização

// Componentes
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

function Carrinho() {
    const [favoritos, setFavoritos] = useState(() => {
        // Inicializa o estado com os itens do localStorage
        return JSON.parse(localStorage.getItem('favoritos')) || [];
    });

    const removerFavorito = (index) => {
        const novosFavoritos = favoritos.filter((_, i) => i !== index);
        setFavoritos(novosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className="carrinhoContainer">
                <h1>Itens Favoritados</h1>
                {favoritos.length === 0 ? (
                    <p>Nenhum item favoritado ainda.</p>
                ) : (
                    <div className="carrinhoGrid">
                        {favoritos.map((item, index) => (
                            <div className="carrinhoItem" key={index}>
                                <img src={item.imagem} alt={item.nome} className="carrinhoImagem" />
                                <h2>{item.nome}</h2>
                                <p>Preço: {item.valor}</p>
                                <button onClick={() => removerFavorito(index)}>Remover dos Favoritos</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Carrinho;