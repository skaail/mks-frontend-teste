"use client"
import { Produto } from '@/types/produto'
import * as S from './styles'
import Image from 'next/image'

export const ProdutoCard = (props: Produto) => {

    return (
        <S.CardContainer>
          <S.Card>
            <S.ImagemProduto>
              <Image
                src={props.photo}
                alt={props.description}
                width={180}
                height={180}
                priority={true}
              />
            </S.ImagemProduto>
            <S.PrecoProduto>
              <h2>{props.brand} {props.name}</h2>
              <span>R${Number(props.price)}</span>
            </S.PrecoProduto>
            <S.DescricaoProduto>
              <p>
                {props.description}
              </p>
            </S.DescricaoProduto>
          </S.Card>
          <S.StyledButton>
            <span>COMPRAR</span>
          </S.StyledButton>
        </S.CardContainer>
      )
}