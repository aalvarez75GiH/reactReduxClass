import axios from 'axios'

export default axios.create({
    baseURL: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='

})