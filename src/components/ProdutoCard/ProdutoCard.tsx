"use client"

import { Produto } from '@/types/produto'
import * as S from './styles'
import Image from 'next/image'
import { useCarrinho } from '@/context/CarrinhoContext'
import { useAnimate } from 'framer-motion'

import { PiShoppingCartBold } from "react-icons/pi"

interface Props {
  produto: Produto
}

export const ProdutoCard = ({ produto }: Props) => {

  const [scope, animate] = useAnimate()

  const { adicionar } = useCarrinho()

  const adicionarCarrinho = (produto: Produto) => {
    animate([
      ["#shopping", {top: '40px', transform: 'translate(0, 0)', opacity: 1}, {duration: 0.4, at: "<"}],
      ["#shopping", {right: '155px', transform: 'translate(0, 0)', opacity: 0}, {duration: 0.2, at: 0.4}],
      ["#shopping", {x: 2000, y: 2000}, {duration: 0.1, at: "<"}],
      
    ])
    adicionar(produto)
  }

  
    return (
        <S.CardContainer ref={scope}>
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
            <PiShoppingCartBold size={20} id='shopping' style={{position: "absolute", opacity: 0, pointerEvents: "none"}}/>

          </S.StyledButton>
        </S.CardContainer>
      )
}