import styled from 'styled-components'

export const Container = styled.section `
    height:100vh;
    background:linear-gradient(to right, rgba(17,17,17,0.9) 20%, transparent 80%), 
    linear-gradient(to top, rgba(17,17,17,0.5) 5%, transparent 95%), url(${props => props.background}), center, no-repeat;
    
    background-size:cover;
`  

export const DetailsContainer = styled.div `
    margin:0px 0px 80px 20px;
    height:inherit;
    position:relative;
    top:200px;

    h1 {
        font-size:48px;
        max-width:500px;
        margin-bottom:15px;
        color:#fff;
    }
    p:last-child {
        font-size:18px;
        color:#fff;
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
    p:nth-child(n+2) { 
        color:#fff;
    }
` 
export const ContainerButtons = styled.div `
    margin:20px 0px;

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
