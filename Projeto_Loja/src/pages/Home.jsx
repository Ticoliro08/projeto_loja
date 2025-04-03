// Style
import "./Home.css"
//.

// Componentes
    import Header from "../components/Header"
    import Navbar from "../components/NavBar"
    import Footer from "../components/Footer"
    import SliderHome from "../components/slider"
//.



function Home(){
    
    return(
        <>
            <Header />
            <Navbar home="ativo" />
            <section className="banner">
                {/* Marquee: É uma tag html para animar o letreiro, movimentando ele pela página; 
                    Behavior: Define a forma que o letreiro movimentará;
                    Direction: Define para que lado o letreiro vai;
                    Scrollamount: Define a velocidade da animação, baseado em pixels;
                    Scrolldelay: Define o tempo que o letreiro aparecerá novamente.
                */}
                <marquee behavior="scroll" direction="left" scrollamount="12" scrolldelay="100"><h1><span id="bandeira">Cupom <span id="azul">de</span> 10%<span id="azul"> na primeira compra</span></span></h1></marquee>
            </section>
<SliderHome />
            <section className="TituloDosPacotes">
            </section>
           
            <Footer />
        </>
    )
}

export default Home