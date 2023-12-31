import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Sucess from './pages/Sucess'
import Home from './pages/Home'

function App() {
 
  return (
   
     
      <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path='/home' element={<Home />} />
    </Routes>
    
   </BrowserRouter>

  
  )
}

export default App
