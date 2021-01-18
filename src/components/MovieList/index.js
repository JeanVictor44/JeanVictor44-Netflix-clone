import {useState} from 'react'
import {ContainerList, ContainerMovies, MoveListToLeft, MoveListToRight} from './MovieListElements'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

const MovieList = ({title,movies}) => {
    const [scrollX, setScrollX] = useState(-300)
    
    const moveScrollXToLeft = () => {
        let x = scrollX + (window.innerWidth/2)
        if(x > 0){
            x = 0
        }
        setScrollX(x) 
    }

    const moveScrollXToRight = () => {
        let x = scrollX - (window.innerWidth/2)
        const containerMoviesWidth = (180 * movies.length) 
        if(x < -containerMoviesWidth){
            x = -containerMoviesWidth
        }
        console.log(scrollX)
        setScrollX(x)
    }
    return (
        <ContainerList>
            <h1>{title}</h1>

        <ContainerMovies scrollX={scrollX} width={180 * movies.length}>  
            <MoveListToLeft onClick={moveScrollXToLeft}>
                <img src={arrowLeft} alt="Move list to Left"/>
            </MoveListToLeft>

            <MoveListToRight onClick={moveScrollXToRight}>
                <img src={arrowRight} alt="Move list to Right"/>
            </MoveListToRight>

            {movies.map(movie => (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_name}/>
                </div>
            ))}
            </ContainerMovies>
        </ContainerList>
    )
}
export default MovieList