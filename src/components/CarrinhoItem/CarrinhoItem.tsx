import React from 'react'
import * as S from './styles';
import Image from 'next/image';
import { useCarrinho } from '@/context/CarrinhoContext';
import { ItemCarrinho } from '@/types/itemCarrinho';

import { AnimatePresence, useAnimate } from 'framer-motion'

interface Props {
  item: ItemCarrinho
}

export default function CarrinhoItem({ item }: Props) {
  const { atualizarQtdProduto, remover } = useCarrinho();

  const [scope, animate] = useAnimate()

  const handleAtualizarQtd = (qtd: number) => {
    const qauntidade = Number(qtd)
    if(qauntidade >= 1) {
      atualizarQtdProduto(item.produto.id, qauntidade)
    }else{
      remover(item.produto.id)
    }
  }

  const handleRemover = () => {
    animate([
      ["#card", {x: 500}, {duration: 0.4, at: "<"}],
      ["#card", {x: 0}, {duration: 0, at: "0.4"}],
      
    ])

    setTimeout(() => {
      remover(item.produto.id)
    }, 400);

    

  }

  return (<AnimatePresence>
  <div ref={scope}>
    

    
<S.ItemCarrinhocontainer  id='card'>
      <Image
        src={item.produto.photo}
        alt={item.produto.name}
        width={57}
        height={57}
      />

      <h3>{item.produto.brand} {item.produto.name}</h3>

      <div>
        <span>Qnt</span>
        <S.QuantidadeItem>
          <span onClick={() => {handleAtualizarQtd(item.quantidade - 1)}}>-</span>
          <span>{item.quantidade}</span>
          <span onClick={() => {handleAtualizarQtd(item.quantidade + 1)}}>+</span>
        </S.QuantidadeItem>
      </div>
      <p>R${Number(item.produto.price) * (item.quantidade)}</p>

      <S.RemoverItem onClick={() => {handleRemover()}}>X</S.RemoverItem>
    </S.ItemCarrinhocontainer>
  </div>
  </AnimatePresence>
    
  );
}