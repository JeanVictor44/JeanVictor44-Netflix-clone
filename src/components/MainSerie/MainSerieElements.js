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
    align-items:flex-end;
`
export const DetailsContainer = styled.div `
    margin-left:20px;
    color:#fff;
    h1 {
        font-size:48px;
        max-width:500px;
        margin-bottom:15px;
    }
    p:last-child {
        font-size:18px;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    margin-bottom:15px;
    p:nth-child(1){
        color:#2F8E46;
    }
    p {
        font-size:18px;
        font-weight:bold;
    }
    p + p {
        margin-left:20px;
    }
` 
export const ContainerButtons = styled.div `
    margin:15px 0px;

    img {
        width:15px;
        margin-right:10px;
    }
    button {
        width:180px;
        height:50px;
        font-size:18px;
        border-radius:6px;
        border:none;
        outline:none;
        cursor:pointer;
    }
    button + button {
        margin-left:10px;
        background-color:#333;
        color:#fff;
    }
`
export const Overview = styled.p `
    color:#817A70;
    width:500px;
    font-size:18px;
    line-height:1.4;
`
