"use client"
import { getProdutos } from '@/hooks/getProdutos'
import { ProdutoCard } from '../ProdutoCard/ProdutoCard'
import * as S from './styles'

export const ProdutoGrid = () => {

    const { produtos } = getProdutos()

    return (
        <S.GridContainer>
            {produtos?.data.products.map((produto: any) => {
                return (
                    <ProdutoCard key={produto.id} brand={produto.brand} description={produto.description} id={produto.id} name={produto.name} photo={produto.photo} price={produto.price} />
                );
            })}
            
        </S.GridContainer>
    )
}