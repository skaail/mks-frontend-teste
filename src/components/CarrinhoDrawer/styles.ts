import styled from "styled-components"
import { motion } from "framer-motion"

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

export const CarrinhoContainer = styled(motion.div)`
    height: 100vh;
    width: 490px;

    background-color: #0F52BA;

    position: fixed;
    top: 0;
    right: 0;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
`

export const CarrinhoHeader = styled.div`
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const CarrinhoTitulo = styled.p`
    color: white;
    font-size: 27px;
    font-weight: bold;
`

export const CarrinhoFechar = styled.div`
    cursor: pointer;
`

export const CarrinhoBody = styled.div`
    height: 76%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CarrinhoFooter = styled.div`
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: black;

    cursor: pointer;
`
export const ListaItens = styled.div`
    width: 100%;
    heigth: 100px;
    display: flex;

    padding: 20px;
    flex-direction: column;
    align-items: center;

    gap: 10px;
`

export const CarrinhoTotal = styled.div`
    width: 100%;
    height: 100px;

    bottom: 0;

    color: white;
    font-size: 28px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ItemCarrinho = styled.div`
    width: 380px;
    height: 95px;

    background-color: white;
    border-radius: 8px;
`

export const FinalizarCompra = styled.p`
    color: white;
    font-size: 28px;
    font-weight: bold;
`