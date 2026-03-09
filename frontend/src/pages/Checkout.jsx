import { useState, useContext } from "react"
import API from "../services/api"
import { CartContext } from "../context/CartContext"

function Checkout(){

const { cart } = useContext(CartContext)

const [name,setName] = useState("")
const [phone,setPhone] = useState("")
const [address,setAddress] = useState("")

const total = cart.reduce((sum,item)=>sum + item.price,0)

const placeOrder = async()=>{

try{

// save order to database

await API.post("/orders",{

customerName:name,
phone:phone,
address:address,
items:cart,
total:total

})

// whatsapp message

const message = `
New Order Received

Customer: ${name}
Phone: ${phone}
Address: ${address}
Total: ₹${total}
`

const ownerNumber = "919999999999" // replace with shop owner number

const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`

window.open(url,"_blank")

alert("Order placed successfully!")

}catch(err){

console.log(err)

alert("Order failed")

}

}

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
Checkout
</h1>

<input
placeholder="Name"
className="border p-2 block mb-3"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Phone"
className="border p-2 block mb-3"
onChange={(e)=>setPhone(e.target.value)}
/>

<textarea
placeholder="Address"
className="border p-2 block mb-3"
onChange={(e)=>setAddress(e.target.value)}
/>

<h2 className="text-xl font-bold mb-4">
Total: ₹{total}
</h2>

<button
onClick={placeOrder}
className="bg-green-500 text-white px-4 py-2 rounded"
>

Place Order

</button>

</div>

)

}

export default Checkout