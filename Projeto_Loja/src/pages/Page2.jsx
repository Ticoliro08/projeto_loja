import "../pages/Page2.css"
import Header from "../components/Header"
import Card from "../components/cardBase"
import Footer from "../components/Footer";
import Navbar from "../components/NavBar"

// imagens dos tenis
import Img1 from '../assets/camisa/camisa.jpg'

function Pagina1 () {
    return (
      <>
      <Header/>
      <Navbar pg2="ativo"/>
      <br />
      <br />
      <center>
       
        <section className="cards">
        <Card
                imagem={Img1}
                    nomeProduto= "camisa 1"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {79.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "camisa 2"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {99.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "camisa 3"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {59.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "camisa 4"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {259.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "camisa 5"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {119.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "camisa 6"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {69.90}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "camisa 7"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {150}
                />
                <Card
                imagem={Img1}
                    nomeProduto= "camisa 8"
                    descricao= "O camisa 5 é um dos modelos mais icônicos da linha camisa. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= {179.90}
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
  