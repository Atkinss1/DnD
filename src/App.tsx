import './assets/styles/App.scss'
import Hero from './components/Hero/Hero'
import Nav from './components/Navbar/Nav'
import { TopicProvider } from './context/Topic'


function App() {

  return (
    <>
      <TopicProvider>
        <Nav />
        <Hero />
      </TopicProvider>
    </>
  )
}

export default App
