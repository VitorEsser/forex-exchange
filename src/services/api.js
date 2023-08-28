import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    'apikey': process.env.REACT_APP_API_KEY
  }
})

export default api