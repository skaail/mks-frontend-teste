import styled from "styled-components"

export const CardContainer = styled.div`
    width: 220px;
    height: 285px;

    background-color: white;

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    -webkit-box-shadow: 0px 0px 51px -31px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 51px -31px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 51px -31px rgba(0,0,0,0.75);
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 138px;

    display: flex;
    justify-content: center;
`

export const InformacaoContainer = styled.div`
    
`

export const BtnComprar = styled.div`
    width: 100%;
    height: 32px;

    background-color: black;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const ProdutoImage = styled.img`
    height: 138px;
    padding: 5px;
`