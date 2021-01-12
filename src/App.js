import {useEffect, useState} from 'react'
import {GlobalStyles} from './GlobalStyles'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MainSerie from './components/MainSerie'
import Modal from './components/Modal'
import Loader from './components/Loader'
import Tmdb from './api/Tmdb/index'
import Youtube from './api/Youtube/index'

const App = () => {
  const [homeMovies, setHomeMovies] = useState([])
  const [detailsSerie, setDetailsSerie] = useState(null) 
  const [modalIsOpen, setModalState] = useState(false)


  useEffect(() => {
    const loadPage = async() => {
      const movies = await Tmdb.getHomeMovies()
      setHomeMovies(movies)
      
      const netflixSeries = movies.filter(list => list.slug)[0].movies
      const randomSerie = netflixSeries[Math.floor(Math.random() * (netflixSeries.length - 1) )] 
      const detailsRandomSerie = await Tmdb.getDetailsSerie(randomSerie.id) 
      
      const trailerKey = await Youtube.getTrailer(detailsRandomSerie.name)
      const detailsSerieWithTrailer = Object.assign(detailsRandomSerie, {trailerKey}) 
      
      setDetailsSerie(detailsSerieWithTrailer)
    } 
    

    loadPage()
  }, [])
  
  if(detailsSerie){
    return (
    <>
      <GlobalStyles />
      <Modal isOpen={modalIsOpen} closeModal={() => setModalState(false) } videoKey={detailsSerie.trailerKey}/>
      <Header />
      
      <MainSerie detailsSerie={detailsSerie}  openModal={() => setModalState(true)}/>
      <section>
    {homeMovies.map((item) =>(     
          <MovieList title={item.title} movies={item.movies}/>
    ))}
      </section>
    
    </>
    )

  }
  return (
    <>
      <GlobalStyles />
      <Loader />
    
    </>
  )

}

export default App;
