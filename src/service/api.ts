import axios from "axios"


const api = axios.create({
  baseURL: 'https://devmeuerponline.azurewebsites.net/api/v1/'
})

export default api;