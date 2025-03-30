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
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
                />
                <Card
                imagem={Img1}
                    nomeProduto= "Air Jordan"
                    descricao= "O Air Jordan 5 é um dos modelos mais icônicos da linha Air Jordan. O tênis foi lançado em 1990 e foi o primeiro modelo da linha a ter uma entressola de amortecimento de ar visível."
                    valor= "R$ 399,90"
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
  