// Style
import "./Header.css"

// Components
import Hora from './HoraAtual'


// Imagens
    import logo from "../assets/logo.png"
//.

function Header() {
    return(
        <>
            <header className="headerBox">
                <img className="logoHeader" src={logo}  />
                <h1>Free Style</h1>
                <Hora/>
                
            </header>
        </>
    )
}

export default Header