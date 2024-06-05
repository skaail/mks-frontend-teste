"use client"
import * as S from './styles'
import { PiShoppingCartBold } from "react-icons/pi"

export const Header = () => {
    return (
        <S.HeaderContainer>

            <S.Logo>
                <S.Titulo>MKS</S.Titulo>
                <S.Subtitulo>Sistemas</S.Subtitulo>
            </S.Logo>

            <S.BtnCarrinho>
                <PiShoppingCartBold size={20}/>
                <S.CarrinhoContador>0</S.CarrinhoContador>
            </S.BtnCarrinho>

        </S.HeaderContainer>
    )
}