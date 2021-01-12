//Centro dos métodos de requisição 
import Api from './request'

const {REACT_APP_TMDB_API_KEY:API_KEY} = process.env 

export default {
    getHomeMovies: async() => {
        return [
            {
                slug:'Netflix',
                title:'Originais Netflix',
                movies:(await Api.get(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`)).data.results
            },
            
            {
                title:'Populares',
                movies:(await Api.get(`/movie/popular?api_key=${API_KEY}&language=pt-BR`)).data.results
            },
            
            {
                title:'Séries em alta',
                movies:(await Api.get(`/tv/popular?api_key=${API_KEY}&language=pt-BR`)).data.results
            } /* ,

            {
                title:'',
                movies:().data.results
            },
           
            {
                title:'',
                movies:().data.results
            },
           
            {
                title:'',
                movies:().data.results
            } */
           
        ]
    },
    getDetailsSerie: async(serieId) => {
        const detailsSerie = (await Api.get(`/tv/${serieId}?api_key=${API_KEY}&language=pt-BR`)).data
        return detailsSerie
    }

}