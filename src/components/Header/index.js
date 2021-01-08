
import {Container} from './HeaderElements' 
import Logo from '../../assets/netflixLogo.svg'

const Header = () => {
    return (
        <Container>
            <div>
                <img src={Logo} alt="Netflix Logo" />
            </div>
            <div>
                <input type="text" placeholder="Buscar"/>
            </div>
        </Container>
    )
}
export default Header