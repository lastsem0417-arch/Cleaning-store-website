import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function Cart(){

const { cart, removeFromCart } = useContext(CartContext)

const total = cart.reduce((sum,item)=>sum + item.price,0)

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
Your Cart
</h1>

{cart.length === 0 && (
<p>No items in cart</p>
)}

{cart.map((item,index)=>(

<div
key={index}
className="flex justify-between bg-white p-4 mb-3 shadow rounded"
>

<p>
{item.name} - ₹{item.price}
</p>

<button
onClick={()=>removeFromCart(index)}
className="bg-red-500 text-white px-3 py-1 rounded"
>

Remove

</button>

</div>

))}

<h2 className="text-xl font-bold mt-4">
Total: ₹{total}
</h2>

{cart.length > 0 && (

<Link
to="/checkout"
className="inline-block bg-green-500 text-white px-6 py-2 mt-4 rounded"
>

Proceed to Checkout

</Link>

)}

</div>

)

}

export default Cart