import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #0F52BA;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    padding: 100px;

    display: flex;
    align-items: flex-end;
    gap: 5px;
`

export const Titulo = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 500;
`

export const Subtitulo = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 100;

    padding-bottom: 5px;
`

export const BtnCarrinho = styled.div`
    margin-right: 100px;

    width: 90px;
    height: 45px;

    background-color: white;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    cursor: pointer;
`

export const CarrinhoContador = styled.p`
    font-size: 18px;
    font-weight: bold;
`