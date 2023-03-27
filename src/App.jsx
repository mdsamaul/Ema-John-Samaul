import { useState } from 'react'
import './App.css'
import Bannder from './components/Bannder/Bannder'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import ReviewOrder from './components/ReviewOrder/ReviewOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Bannder />
      <Products />
      <ReviewOrder />
    </div>
  )
}

export default App
