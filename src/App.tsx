import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/App.scss'
import Hero from './components/Hero/Hero'
import Nav from './components/Navbar/Nav'


function App() {

  return (
    <>
        <Nav />
        <Hero />
    </>
  )
}

export default App
