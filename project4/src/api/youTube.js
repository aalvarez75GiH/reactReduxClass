import axios from 'axios'

const KEY = 'AIzaSyBKZUY8jr9FFMzCkQhYDSqSZ-I-tLHV2R0'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
})
