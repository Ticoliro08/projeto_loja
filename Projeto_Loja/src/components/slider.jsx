import { useState, useEffect } from "react";
import imagem1 from "../assets/slider/imagem1.jpg";
import imagem2 from "../assets/slider/imagem2.jpg";
import imagem3 from "../assets/slider/imagem3.jpg";

// Corrigido para o caminho correto
import "../components/slider.css"; // Verifique a capitalização

function SliderHome() {
  const imagens = [imagem1, imagem2, imagem3];
  const [imagemAtual, setImagemAtual] = useState(0);

  const Proximo = () => {
    setImagemAtual((prev) => (prev + 1) % imagens.length);
  };

  // Efeito para mudar automaticamente o slide a cada 2 segundos
  useEffect(() => {
    const intervalo = setInterval(Proximo, 2000);
    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [imagemAtual]);

  return (
    <article className="meio">
      <div id="slider">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            className="img"
            src={imagem}
            style={{ display: index === imagemAtual ? "block" : "none" }}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </article>
  );
}

export default SliderHome;