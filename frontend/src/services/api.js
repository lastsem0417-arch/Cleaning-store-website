import axios from "axios"

const API = axios.create({
baseURL:"https://cleaning-store-website.onrender.com/api"
})

export default API