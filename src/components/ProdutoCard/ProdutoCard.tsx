"use client"
import * as S from './styles'

type produtoType = {
    brand: string
    description: string
    id: number
    name: string
    photo: string
    price: number
};

export const ProdutoCard = (props: produtoType) => {

    return (
        <S.CardContainer>
            <S.ImageContainer>
                <S.ProdutoImage src={props.photo} />
            </S.ImageContainer>

            <S.InformacaoContainer>

            </S.InformacaoContainer>

            <S.BtnComprar>

            </S.BtnComprar>
        </S.CardContainer>
    )
}