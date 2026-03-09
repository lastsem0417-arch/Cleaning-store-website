import { Link } from "react-router-dom"

function Home(){

return(

<div className="min-h-screen bg-gray-100">

{/* Hero Section */}

<div className="text-center py-20 bg-blue-600 text-white">

<h1 className="text-5xl font-bold mb-4">
Khushi Cleaning Store
</h1>

<p className="text-lg mb-6">
Premium cleaning products for your home
</p>

<Link
to="/products"
className="bg-white text-blue-600 px-6 py-3 rounded font-semibold"
>

Shop Now

</Link>

</div>

{/* Features */}

<div className="grid grid-cols-3 gap-8 p-10">

<div className="bg-white p-6 rounded shadow text-center">

<h3 className="text-xl font-bold mb-2">
Quality Products
</h3>

<p>
Best cleaning materials for your home
</p>

</div>

<div className="bg-white p-6 rounded shadow text-center">

<h3 className="text-xl font-bold mb-2">
Fast Orders
</h3>

<p>
Quick and easy ordering system
</p>

</div>

<div className="bg-white p-6 rounded shadow text-center">

<h3 className="text-xl font-bold mb-2">
WhatsApp Support
</h3>

<p>
Contact store instantly
</p>

</div>

</div>

</div>

)

}

export default Home