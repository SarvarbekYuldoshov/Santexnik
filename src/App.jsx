import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
         <Header/>
         <Hero/>
      </div>
    </>
  )
}

export default App
