import "../pages/Page1.css"
import Header from "../components/Header"
import Card from "../components/cardBase"
import Footer from "../components/Footer";
import Navbar from "../components/NavBar"

// imagens dos tenis
import Img1 from '../assets/tenis/air_jordan_5.jpg'

function Pagina1 () {
    return (
      <>
      <Header/>
      <Navbar pg1="ativo"/>
      <br />
      <br />
      <center>
       
        <section className="cards">
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 1"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {399.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 2"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {100.00}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 3"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {450}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 4"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {299.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 5"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {349.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 6"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {149.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 7"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {659.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan 8"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {399.90}
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
  