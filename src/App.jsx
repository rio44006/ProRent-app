import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>ProRent - Marketplace de Aluguel de Carros P2P</h1>
        <p>Conectando proprietarios e locatarios</p>
      </header>
      <main>
        <div className="hero">
          <h2>Bem-vindo ao ProRent</h2>
          <p>A plataforma inovadora para aluguel de carros peer-to-peer</p>
          <button onClick={() => setCount(count + 1)}>
            Cliques: {count}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
