"use client"
import { CarrinhoDrawer } from '../CarrinhoDrawer/CarrinhoDrawer'
import * as S from './styles'

export const Header = () => {
    return (
        <S.HeaderContainer>

            <S.Logo>
                <S.Titulo>MKS</S.Titulo>
                <S.Subtitulo>Sistemas</S.Subtitulo>
            </S.Logo>

            <CarrinhoDrawer />

        </S.HeaderContainer>
    )
}