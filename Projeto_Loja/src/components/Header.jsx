import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style
import "./Header.css";
import '../components/BotaoCor.css';

// Imagens
import logo from "../assets/logo.png";

function Header() {
    const [temaEscuro, setTemaEscuro] = useState(() => {
        // Verifica o localStorage para definir o tema inicial
        const temaSalvo = localStorage.getItem('temaEscuro');
        return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
    });

    const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar a visibilidade do menu

    useEffect(() => {
        // Atualiza o estilo do corpo com base no tema
        document.body.style.backgroundColor = temaEscuro ? 'black' : 'white';

        // Armazena a preferência no localStorage
        localStorage.setItem('temaEscuro', temaEscuro);
    }, [temaEscuro]);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto); // Alterna a visibilidade do menu
    };

    return (
        <>
            <header className="headerBox">
                <img className="logoHeader" src={logo} alt="Logo" />
                <h1><Link to='/'>Free Style</Link></h1>
                <button className="cadastro"> 
                 <Link style={{textDecoration:'none', color:'black'}} to='/cadastro'>Cadastrar</Link>
                </button>

                <button className="menuButton" onClick={toggleMenu}>
                    {menuAberto ? <i className='bx bx-menu'></i> : <i className='bx bx-menu'></i>}
                </button>
            </header>
            
            {menuAberto && (
                <nav className="menu">
                    <button className="botaoCor" onClick={() => setTemaEscuro(!temaEscuro)}>
                        {temaEscuro ? <i className='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>}
                    </button>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/favoritos'>Favoritos</Link></li>
                        <li><Link to='/carrinho'>Carrinho</Link></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Header;