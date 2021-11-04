import { commerce } from "./lib/commerce"
import "./App.css"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from "./components/products"

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await commerce.products.list()
    setProducts((response && response.data) || [])
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  // console.log({ products })

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Products products={products} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
