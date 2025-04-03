import "../pages/Page3.css"
import Header from "../components/Header"
import Card from "../components/cardBase"
import Footer from "../components/Footer";
import Navbar from "../components/NavBar"

// imagens dos tenis
import Img1 from '../assets/oculos/Armação da Oakley.jfif'

function Pagina1 () {
    return (
      <>
      <Header/>
      <Navbar pg3="ativo"/>
      <br />
      <br />
      <center>
       
        <section className="cards">
        <Card
                imagem={Img1}
                    nomeProduto= "oculos 1"
                    valor= {279.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "oculos 2"
                    valor= {79.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "oculos 3"
                    valor={89.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "oculos 4"
                    valor= {60}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "oculos 5"
                    valor= {99.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "oculos 6"
                    valor= {129.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "oculos 7"
                    valor= {149.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "oculos 8"
                    valor= {199.90}
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
  