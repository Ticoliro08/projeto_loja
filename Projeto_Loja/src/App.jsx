// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from './pages/Home'
  import Page1 from './pages/Page1'
  import Page2 from './pages/Page2'
  import Page3 from './pages/Page3'
  import Page4 from './pages/Page4'

  import Cadastro from './pages/cadastro'
  
//menu
import Favoritos from './pages/favoritos'
import Carrinho from './pages/carrinho'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/calcados' element={<Page1 />}/>
          <Route path='/camisas' element={<Page2 />} />
          <Route path='/oculos' element={<Page3 />} /> 
          <Route path='/jaquetas' element={<Page4 />} />  

          <Route path='/favoritos' element={<Favoritos />} />         
          <Route path='/carrinho' element={<Carrinho />} />        

          <Route path='/cadastro' element={<Cadastro />} />         
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App