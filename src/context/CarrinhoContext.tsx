"use client"

import React, { createContext, ReactNode, useContext, useState } from "react"
import { Produto } from "@/types/produto"
import { ItemCarrinho } from "@/types/itemCarrinho"

interface CarrinhoContextType {
    itens: ItemCarrinho[];
    adicionar: (produto: Produto) => void;
    remover: (produtoId: number) => void;
    atualizarQtdProduto: (produtoId: number, quatidade: number) => void;
    total: number;
    quantidade: number;

}

const CarrinhoContext = createContext<CarrinhoContextType>({
    itens: [],
    adicionar: () => {},
    remover: () => {},
    atualizarQtdProduto: () => {},
    total: 0,
    quantidade: 0
})

export const useCarrinho = () => {
    return useContext(CarrinhoContext)
}

interface Props {
    children: React.ReactNode
}

export const CarrinhoProvider = ({ children }: Props) => {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    const adicionar = (produto: Produto) => {
        
        const existingCarrinhoItemIndex = itens.findIndex(
            (item) => item.produto.id === produto.id
        )

        if(existingCarrinhoItemIndex !== -1) {
            const existingCarrinhoItem = itens[existingCarrinhoItemIndex]
            const atualizarCarrinho = {
                ...existingCarrinhoItem,
                quantidade: existingCarrinhoItem.quantidade + 1
            }

            const atualizarItens = [...itens]
            atualizarItens[existingCarrinhoItemIndex] = atualizarCarrinho
            setItens(atualizarItens)
        } else {
            setItens([...itens, {produto, quantidade: 1}])
        }
    }


    const remover = (produtoId: number) => {
        const atualizarItens = itens.filter(
            (item) => item.produto.id !== produtoId
        )

        setItens(atualizarItens)
    }

    const atualizarQtdProduto = (produtoId: number, quantidade: number) => {
        const existingCarrinhoItemIndex = itens.findIndex(
            (item) => item.produto.id === produtoId
        )

        if(existingCarrinhoItemIndex !== -1){
            const existingCarrinhoItem = itens[existingCarrinhoItemIndex]
            const atualizarItemCarrinho = {
                ...existingCarrinhoItem,
                quantidade
            }

            const atualizarItens = [...itens]
            atualizarItens[existingCarrinhoItemIndex] = atualizarItemCarrinho
            setItens(atualizarItens)
        }
    }

    const total = itens.reduce(
        (total, item) => total + item.produto.price * item.quantidade,
        0
    )

    const quantidade = itens.reduce((count, item) => count + item.quantidade, 0)

    return (
        <CarrinhoContext.Provider
          value={{
            itens,
            adicionar,
            remover,
            atualizarQtdProduto,
            total,
            quantidade
          }}
        >
          {children}
        </CarrinhoContext.Provider>
      );
    };