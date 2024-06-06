"use client"

import { Produto } from '@/types/produto'
import * as S from './styles'
import { useCarrinho } from '@/context/CarrinhoContext'
import { useAnimate } from 'framer-motion'

import { PiShoppingCartBold } from "react-icons/pi"
import toast from 'react-hot-toast'

interface Props {
  produto: Produto
}

export const ProdutoCard = ({ produto }: Props) => {

  const [scope, animate] = useAnimate()

  const { adicionar, total } = useCarrinho()

  const adicionarCarrinho = (produto: Produto) => {
    animate([
      ["#shopping", {top: '40px', transform: 'translate(0, 0)', opacity: 1}, {duration: 0.4, at: "<"}],
      ["#shopping", {right: '155px', transform: 'translate(0, 0)', opacity: 0}, {duration: 0.3, at: 0.4}],
      ["#shopping", {x: 2000, y: 2000}, {duration: 0.1, at: "<"}],
      
    ])
    adicionar(produto)
    toast.success(`${produto.name} adicionado ao carrinho`)
  }

  
    return (
        <S.CardContainer ref={scope}>
          <S.Card>
            <S.ImagemProduto>
              <img
                data-testid="image"
                src={produto.photo}
                alt={produto.description}
                width={180}
                height={180}
              />
            </S.ImagemProduto>
            <S.PrecoProduto>
              <h2 data-testid="name-brand">{produto.brand} {produto.name}</h2>
              <span data-testid="price">R${Number(produto.price)}</span>
            </S.PrecoProduto>
            <S.DescricaoProduto>
              <p data-testid="decription">
                {produto.description}
              </p>
            </S.DescricaoProduto>
          </S.Card>
          <S.StyledButton data-testid="comprar" onClick={() => adicionarCarrinho(produto)}>
            <span>COMPRAR</span>
            <PiShoppingCartBold size={20} id='shopping' style={{position: "absolute", opacity: 0, pointerEvents: "none"}}/>

          </S.StyledButton>
        </S.CardContainer>
      )
}