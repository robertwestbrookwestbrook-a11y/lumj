import { useState } from 'react'
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Leaders from './components/Leaders';
import Solutions from './components/Solutions';
import Caters from './components/Caters';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Jumbotron />
      <Leaders />
      <Solutions />
      <Caters />
      <Footer />
    </>
  )
}

export default App
