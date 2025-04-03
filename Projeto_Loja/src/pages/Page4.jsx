import "../pages/Page4.css"
import Header from "../components/Header"
import Card from "../components/cardBase"
import Footer from "../components/Footer";
import Navbar from "../components/NavBar"

// imagens dos tenis
import Img1 from '../assets/jaqueta/jaqueta.jpg'

function Pagina1 () {
    return (
      <>
      <Header/>
      <Navbar pg4="ativo"/>
      <br />
      <br />
      <center>
       
        <section className="cards">
        <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 1"
                    valor= {299.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 2"
                    valor= {279.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 3"
                    valor= {149.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 4"
                    valor= {99.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 5"
                    valor= {129.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 6"
                    valor= {250}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 7"
                    valor= {349.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "jaqueta 8"
                    valor= {329.90}
                />
            </section>
  </center>
  <br></br>
  <br></br>

  <Footer/>
      </>
    );
  }
  
  export default Pagina1;
  