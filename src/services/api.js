import axios from "axios";


const api = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1/campeonatos",
  headers: {
    get: {       
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_API}`
    }
  }
});

export default api;