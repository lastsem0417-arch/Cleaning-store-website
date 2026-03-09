function WhatsAppButton(){

const phone="9428174003"

return(

<a
href={`https://wa.me/${phone}?text=Hello I need help`}
target="_blank"
className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl z-50"
>

🟢

</a>

)

}

export default WhatsAppButton