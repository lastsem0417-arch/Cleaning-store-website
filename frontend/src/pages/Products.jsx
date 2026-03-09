import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const products=[

{
id:1,
name:"Phenyl",
price:120,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
},

{
id:2,
name:"Odonil",
price:80,
image:"https://cdn-icons-png.flaticon.com/512/3176/3176364.png"
},

{
id:3,
name:"Handwash",
price:90,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913462.png"
},

{
id:4,
name:"Spray Bottle",
price:70,
image:"https://cdn-icons-png.flaticon.com/512/3050/3050153.png"
},

{
id:5,
name:"Air Freshener",
price:150,
image:"https://cdn-icons-png.flaticon.com/512/3050/3050155.png"
},

{
id:6,
name:"Glass Cleaner",
price:95,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:7,
name:"Garbage Bag",
price:60,
image:"https://cdn-icons-png.flaticon.com/512/484/484662.png"
},

{
id:8,
name:"Grass Broom",
price:120,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913467.png"
},

{
id:9,
name:"Plastic Broom",
price:130,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913467.png"
},

{
id:10,
name:"Mop",
price:200,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913467.png"
},

{
id:11,
name:"Hand Gloves",
price:50,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913470.png"
},

{
id:12,
name:"Scrub Pad",
price:40,
image:"https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
},

{
id:13,
name:"Dishwash Liquid",
price:120,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:14,
name:"Dustbin",
price:350,
image:"https://cdn-icons-png.flaticon.com/512/484/484662.png"
},

{
id:15,
name:"Detergent Liquid",
price:180,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:16,
name:"Dishwash Soap",
price:45,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:17,
name:"Detergent Soap",
price:50,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:18,
name:"Detergent Powder",
price:220,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:19,
name:"Naphthalene Balls",
price:60,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:20,
name:"Wiper",
price:110,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913467.png"
},

{
id:21,
name:"Bucket",
price:250,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913464.png"
},

{
id:22,
name:"Bath Soap",
price:40,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:23,
name:"Microfiber Cloth",
price:70,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
},

{
id:24,
name:"Body Wash",
price:180,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913462.png"
},

{
id:25,
name:"Shampoo",
price:150,
image:"https://cdn-icons-png.flaticon.com/512/2913/2913462.png"
}

]

function Products(){

const { addToCart } = useContext(CartContext)

return(

<div className="p-10 bg-gray-100 min-h-screen">

<h1 className="text-4xl font-bold mb-10 text-center">
Our Cleaning Products
</h1>

<div className="grid grid-cols-4 gap-8">

{products.map(p=>(

<div
key={p.id}
className="bg-white rounded-lg shadow hover:shadow-xl p-6 text-center transition"
>

<img
src={p.image}
className="w-20 mx-auto mb-4"
/>

<h2 className="text-lg font-semibold">
{p.name}
</h2>

<p className="text-gray-600 mb-3">
₹{p.price}
</p>

<button
onClick={()=>addToCart(p)}
className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
>

Add to Cart

</button>

</div>

))}

</div>

</div>

)

}

export default Products