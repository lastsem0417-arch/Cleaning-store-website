import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import WhatsAppButton from "./components/WhatsAppButton"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import AdminDashboard from "./pages/AdminDashboard"

function App(){

return(

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/products" element={<Products />} />

<Route path="/cart" element={<Cart />} />

<Route path="/checkout" element={<Checkout />} />

<Route path="/admin/dashboard" element={<AdminDashboard />} />

</Routes>

<WhatsAppButton />

</BrowserRouter>

)

}

export default App