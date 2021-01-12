import playButton from '../../assets/playButton.svg' 
import {Container, DetailsContainer, InfoContainer, ContainerButtons, Overview} from './MainSerieElements'

const PrincipalSerie = ({detailsSerie, openModal}) => {

    
    return (
        <Container background={`https://image.tmdb.org/t/p/original/${detailsSerie.backdrop_path}`}>   
            <DetailsContainer>
                <h1>{detailsSerie.name}</h1>

                <InfoContainer>
                    <p>{detailsSerie.vote_average} Votos</p>
                    <p>{new Date(detailsSerie.first_air_date).getFullYear()}</p>
                    <p>{detailsSerie.number_of_seasons} Temporada{detailsSerie.number_of_seasons > 1 &&'s'}</p>
                </InfoContainer>
                <Overview>{detailsSerie.overview}</Overview>
                <ContainerButtons>

                    <button onClick={openModal}><img src={playButton} />Assistir trailer</button>
                    <button >+ Minha lista</button>
                </ContainerButtons>
                <p><strong>Gêneros</strong>: {detailsSerie.genres.map(genre => genre.name + ' ')}</p>
            </DetailsContainer>
        </Container>
    )
}
export default PrincipalSerie