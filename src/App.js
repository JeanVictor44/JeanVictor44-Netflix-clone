import {useEffect, useState} from 'react'
import {GlobalStyles} from './GlobalStyles'
import Header from './components/Header'
import MovieList from './components/MovieList'
import PrincipalSerie from './components/PrincipalSerie'
import Modal from './components/Modal'
import Tmdb from './api/Tmdb'

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
      console.log(detailsRandomSerie)
      setDetailsSerie(detailsRandomSerie)
    } 
    

    loadPage()
  }, [])
  
  if(detailsSerie){
    return (
    <>
      <GlobalStyles />
      <Modal isOpen={modalIsOpen} closeModal={() => setModalState(false) } videoKey={detailsSerie.videos.results[0].key}/>
      <Header />
      
      <PrincipalSerie detailsSerie={detailsSerie}  openModal={() => setModalState(true)}/>
    
    </>
    )

  }
  return null

}

export default App;
