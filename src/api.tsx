import axios from "axios"

const api = axios.create({
    baseURL: "https://frontendproject.b2bit.company/account"
})

export default api;