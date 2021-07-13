import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID J_82bG9lY8h-Y9hhZC6TX2mpmEoqPmc0fFaJ6c12b30',
    }
})

 