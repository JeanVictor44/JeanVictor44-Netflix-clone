import styled from 'styled-components'


export const ContainerList = styled.section `
    h1 {
        margin:20px 0px;
        font-size:21px;
    }
    color:#fff;
    margin:0px 0px 20px 20px;
`
export const ContainerMovies = styled.div `
    display:flex;
    overflow:hidden;
    padding:15px 0px;
    
    div {
        flex:1 0 180px;
        transition:all .2s ;

    }
    div:hover {
        cursor:pointer;
        transform:scale(1.1);
    }

    div + div {
        margin-left:20px;
    }
`
