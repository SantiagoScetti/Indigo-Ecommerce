import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>La tienda de valeria</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cuantas veces intentamos esto {count}
        </button>
        <p>
         LA RE CAJETA DE LA LORA
        </p>
      </div>
      <p className="read-the-docs">
        PORFIN NUNCA MÁS
      </p>
    </>
  )
}

export default App
