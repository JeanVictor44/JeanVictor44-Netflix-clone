import styled from 'styled-components'

export const Container = styled.section `
    height:90vh;
    background:url(${props => props.background}) center no-repeat;
    background-size:cover;
`  
export const VerticalGradient = styled.div `
    width:inherit;
    height:inherit;
    background:linear-gradient(to top, rgba(17, 17, 17, 0.6) 30%, transparent 70% );
`
export const HorizontalGradient = styled.div `
    width:inherit;
    height:inherit;
    background:linear-gradient(to right, rgba(17, 17, 17, 0.8) 30%, transparent 70%);
    display:flex;
    align-items:center;
`
export const DetailsContainer = styled.div `
    margin-left:20px;
    h1 {
        color:#fff;
        font-size:48px;
        max-width:500px;
        margin-bottom:15px;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    color:#fff;
    margin-bottom:15px;
    p {
        font-size:18px;
    }
    p + p {
        margin-left:20px;
    }
` 
 