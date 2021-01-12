import Api from './request'

const {REACT_APP_YOUTUBE_API_KEY:API_KEY} = process.env


const getTrailer = async(movieName) => {
    const response = (await Api.get(`?part=snippet&channelId=UCWOA1ZGywLbqmigxE4Qlvuw&maxResults=25&q=${movieName} trailer oficial&key=${API_KEY}`)).data
    console.log(response)
    return response.items[0].id.videoId
}

export default {
    getTrailer
}