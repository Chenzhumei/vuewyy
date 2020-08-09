import axios from 'axios'

const service = axios.create({
      baseURL:'/api', 
      timeout: 15000
})

export default service