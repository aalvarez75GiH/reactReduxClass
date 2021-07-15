import axios from 'axios'

const KEY = 'AIzaSyBcvbqcg0n0NsHoH-22-1j-MYVkBrCYE4U'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
})
