import {ContainerList, ContainerMovies} from './MovieListElements'
const MovieList = ({title,movies}) => {
    
    return (
        <ContainerList>
            <h1>{title}</h1>
            <ContainerMovies>
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