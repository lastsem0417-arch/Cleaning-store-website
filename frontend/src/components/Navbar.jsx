import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Navbar(){

const { cart } = useContext(CartContext)

return(

<div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 bg-blue-600 text-white shadow">

<h1 className="text-xl font-bold mb-2 md:mb-0">
Khushi Cleaning Store
</h1>

<div className="flex gap-4 md:gap-6">

<Link to="/">Home</Link>
<Link to="/products">Products</Link>
<Link to="/cart">Cart ({cart.length})</Link>
<Link to="/checkout">Checkout</Link>

</div>

</div>

)

}

export default Navbar