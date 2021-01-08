/* Criar a tela de usuários */

import styled from 'styled-components'

export const Container = styled.header `
    position:fixed;
    width:100%;
    height:85px;
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    input[type="text"] {
        outline:none;
        transition:all .2s ease-out;
        height:40px;
        width:300px;
        padding:12px;
        font-size:17px;
        background-color:#333;
        border:none;
        color:#fff; 
        margin-right:20px;
        border-radius:5px;
    }
    div:nth-child(1) {
        width:170px;
    }
`