import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #0F52BA;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    position: fixed;
    top: 0;
`

export const Logo = styled.div`
    padding: 100px;

    display: flex;
    align-items: flex-end;
    gap: 5px;

    @media screen and (max-width: 1200px) {
        padding: 10px;
    }
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