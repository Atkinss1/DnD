import './assets/styles/App.scss'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Nav from './components/Navbar/Nav'

function App() {

  return (
    <>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/:category' element={<Hero />} />
      </Routes> 
    </>
  )
}

export default App
