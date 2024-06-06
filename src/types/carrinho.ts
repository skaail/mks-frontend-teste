import { Produto } from './produto'

export interface ItemCarrinho extends Produto {
    quantidade: number
}