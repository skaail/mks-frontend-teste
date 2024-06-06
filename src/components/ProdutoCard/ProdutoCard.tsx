"use client"

import { Produto } from '@/types/produto'
import * as S from './styles'
import Image from 'next/image'
import { useCarrinho } from '@/context/CarrinhoContext'

interface Props {
  produto: Produto
}

export const ProdutoCard = ({ produto }: Props) => {

  const { adicionar } = useCarrinho()

  const adicionarCarrinho = (produto: Produto) => {
    adicionar(produto)
  }

  
    return (
        <S.CardContainer>
          <S.Card>
            <S.ImagemProduto>
              <Image
                src={produto.photo}
                alt={produto.description}
                width={180}
                height={180}
                priority={true}
              />
            </S.ImagemProduto>
            <S.PrecoProduto>
              <h2>{produto.brand} {produto.name}</h2>
              <span>R${Number(produto.price)}</span>
            </S.PrecoProduto>
            <S.DescricaoProduto>
              <p>
                {produto.description}
              </p>
            </S.DescricaoProduto>
          </S.Card>
          <S.StyledButton onClick={() => adicionarCarrinho(produto)}>
            <span>COMPRAR</span>
          </S.StyledButton>
        </S.CardContainer>
      )
}