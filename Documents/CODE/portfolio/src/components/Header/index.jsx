import styled from 'styled-components'
import portrait from '../../assets/portrait.jpg'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Img = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100%;
`

export default function Header () {
    return(
        <>
            <HeaderContainer>
                <Img src={portrait} alt="portrait de Janou" />
                <div>
                    <h1>Janou Bertrand</h1>
                    <h2>Developpeur full - stack junior</h2>
                </div>
                <nav>
                    <Link to={`/`}>Acceuil</Link>
                    <Link to={`/projects`}>Projets</Link>
                </nav>
            </HeaderContainer>
        </>
    )
}