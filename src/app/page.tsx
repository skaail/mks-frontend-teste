"use client"
import { Header } from '@/components/Header/Header'
import * as S from './styles'
import { ProdutoGrid } from '@/components/ProdutosGrid/ProdutoGrid'

export default function Home() {
  return (
    <S.Container>
      <Header />
      <S.GridContainer>
        <ProdutoGrid />
      </S.GridContainer>
    </S.Container>
  )
}
