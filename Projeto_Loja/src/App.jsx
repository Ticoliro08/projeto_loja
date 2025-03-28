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
//.

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
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App