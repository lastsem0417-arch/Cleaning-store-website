import { useEffect, useState } from "react"
import API from "../services/api"

function AdminDashboard(){

const [orders,setOrders] = useState([])

useEffect(()=>{
loadOrders()
},[])

const loadOrders = async()=>{

try{

const res = await API.get("/orders")
setOrders(res.data)

}catch(err){

console.log(err)

}

}

const totalRevenue = orders.reduce((sum,o)=>sum + o.total,0)

const avgOrder = orders.length ? Math.floor(totalRevenue/orders.length) : 0

const progress = totalRevenue > 0 ? Math.min((totalRevenue/5000)*100,100) : 0

return(

<div className="p-10 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold mb-8">
Admin Dashboard
</h1>

{/* stats cards */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

<div className="bg-white p-6 rounded shadow">

<p className="text-gray-500">
Total Orders
</p>

<h2 className="text-3xl font-bold">
{orders.length}
</h2>

</div>

<div className="bg-white p-6 rounded shadow">

<p className="text-gray-500">
Total Revenue
</p>

<h2 className="text-3xl font-bold text-green-600">
₹{totalRevenue}
</h2>

</div>

<div className="bg-white p-6 rounded shadow">

<p className="text-gray-500">
Average Order
</p>

<h2 className="text-3xl font-bold">
₹{avgOrder}
</h2>

</div>

</div>

{/* sales progress */}

<div className="bg-white p-6 rounded shadow mb-10">

<h2 className="text-xl font-bold mb-4">
Revenue Progress
</h2>

<div className="w-full bg-gray-200 rounded h-6">

<div
className="bg-blue-500 h-6 rounded text-white text-center text-sm"
style={{width:`${progress}%`}}
>

{Math.floor(progress)}%

</div>

</div>

</div>

{/* recent orders */}

<div className="bg-white p-6 rounded shadow">

<h2 className="text-xl font-bold mb-4">
Recent Orders
</h2>

<table className="w-full">

<thead>

<tr className="border-b">

<th className="text-left p-2">
Customer
</th>

<th className="text-left p-2">
Phone
</th>

<th className="text-left p-2">
Total
</th>

</tr>

</thead>

<tbody>

{orders.slice(0,5).map(o=>(

<tr key={o._id} className="border-b">

<td className="p-2">
{o.customerName}
</td>

<td className="p-2">
{o.phone}
</td>

<td className="p-2">
₹{o.total}
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default AdminDashboard