import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'
import WhatsappIcon from './components/whatsappIcon/WhatsappIcon'


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/services' element={<ProductPage />} />
        </Routes>
        <WhatsappIcon/>
      </BrowserRouter>
    </div>
  )
}

export default App
