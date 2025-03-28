import { useState, useEffect } from "react";
import './style.css';

function TemaDinamico() {
  const [escuro, setEscuro] = useState(false);
  const [hora, setHora] = useState('');

  useEffect(() => {
    const atualizarHora = () => {
      const horaAtual = new Date().getHours();
      setEscuro(horaAtual >= 12 || horaAtual < 6);
      setHora(new Date().toLocaleTimeString());
    };

    // Atualiza a hora imediatamente ao montar o componente
    atualizarHora();

    // Define um intervalo para atualizar a hora a cada segundo
    const intervalo = setInterval(atualizarHora, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div
      style={{
        background:  "rgba(51, 51, 51, 0.8)" , // Fundo transparente
        color: escuro ? "#fff" : "#000", 
        padding: '20px', // Adiciona um pouco de preenchimento
        borderRadius: '10px', // Bordas arredondadas, se desejado
      }}
    >
      <p className="Hora" >{hora}</p>
    </div>
  );
}

export default TemaDinamico;