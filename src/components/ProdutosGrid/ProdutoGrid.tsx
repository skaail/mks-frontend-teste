"use client"
import { GetProdutos } from '@/hooks/getProdutos'
import { ProdutoCard } from '../ProdutoCard/ProdutoCard'
import * as S from './styles'
import { Produto } from '@/types/produto'
import { ProdutoSkeleton } from '../ProdutoSkeleton/ProdutoSkeleton'

export const ProdutoGrid = () => {

    const { produtos, isLoading } = GetProdutos()

    return (
        <S.GridContainer>
            {isLoading ? (
                <>
                    <ProdutoSkeleton />
                    <ProdutoSkeleton />
                    <ProdutoSkeleton />
                    <ProdutoSkeleton />
                    <ProdutoSkeleton />
                    <ProdutoSkeleton />
                    <ProdutoSkeleton />
                    <ProdutoSkeleton />
                </>
            ) : (
                <>
                {produtos?.data.products.map((item: Produto) => {
                    return (
                        <ProdutoCard key={item.id} produto={item} />
                    );
                })}
                </>
            )}
            
            
        </S.GridContainer>
    )
}