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
        <Route path='/api/:category' element={<Hero />} />
        <Route path='/api/:category/:topic' element={<Hero />} />
        <Route path='/api/:category/:topic/:levels' element={<Hero />} />
        <Route path='/api/:category/:topic/:levels/:number' element={<Hero />} />

      </Routes> 
    </>
  )
}

export default App
