import {Container, VerticalGradient, HorizontalGradient, DetailsContainer, InfoContainer} from './PrincipalSerieElements'

const PrincipalSerie = ({detailsSerie}) => {
    return (
        <Container background={`https://image.tmdb.org/t/p/original/${detailsSerie.backdrop_path}`}>
            <VerticalGradient >
                <HorizontalGradient >
                    
                    <DetailsContainer>
                        <h1>{detailsSerie.name}</h1>
                        <InfoContainer>
                            <p>{detailsSerie.vote_average} votos</p>
                            <p>{new Date(detailsSerie.first_air_date).getFullYear()}</p>
                            <p>{detailsSerie.number_of_seasons} Temporada{detailsSerie.number_of_seasons > 1 && 's'}</p>

                        </InfoContainer>
                    </DetailsContainer>

                </HorizontalGradient>
            
            </VerticalGradient>
        </Container>
    )
}
export default PrincipalSerie