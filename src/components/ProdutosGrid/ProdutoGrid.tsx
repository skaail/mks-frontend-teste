"use client"
import { GetProdutos } from '@/hooks/getProdutos'
import { ProdutoCard } from '../ProdutoCard/ProdutoCard'
import * as S from './styles'
import { Produto } from '@/types/produto'

export const ProdutoGrid = () => {

    const { produtos } = GetProdutos()

    return (
        <S.GridContainer>
            {produtos?.data.products.map((item: Produto) => {
                return (
                    <ProdutoCard key={item.id} produto={item} />
                );
            })}
            
        </S.GridContainer>
    )
}