import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API,
  headers:{
    common: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`
    }
  }
})

export default instance
