"use client";

import React, { useState, useEffect, useRef } from "react"
import * as S from "./styles"
import { PiShoppingCartBold } from "react-icons/pi"
import { IoIosCloseCircle } from "react-icons/io"
import { useCarrinho } from "@/context/CarrinhoContext";
import CarrinhoItem from "../CarrinhoItem/CarrinhoItem";
import { AnimatePresence } from "framer-motion";

export const CarrinhoDrawer = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const { itens, total, quantidade } = useCarrinho()

  return (
    <>
    
    <S.BtnCarrinho onClick={(e) => {setOpen(!open)}}>
      <PiShoppingCartBold size={20} />
      <S.CarrinhoContador>{quantidade}</S.CarrinhoContador>
    </S.BtnCarrinho>
    <AnimatePresence>
        {open && (
            <>
                <S.CarrinhoContainer {...drawerPanel}>

                    <S.CarrinhoHeader>
                        <S.CarrinhoTitulo>Carrinho de Compras</S.CarrinhoTitulo>
                        <S.CarrinhoFechar><IoIosCloseCircle size={38} onClick={(e) => {setOpen(!open)}}/></S.CarrinhoFechar>
                    </S.CarrinhoHeader>

                    <S.CarrinhoBody>
                        <S.ListaItens key={1}>

                            {itens.map((item: any) => (
                                <CarrinhoItem key={item.id} item={item}></CarrinhoItem>
                            ))}
                            
                        </S.ListaItens>
                            
                        <S.CarrinhoTotal>
                            <p>Total</p>
                            <p>R${total}</p>
                        </S.CarrinhoTotal>
                    </S.CarrinhoBody>

                    <S.CarrinhoFooter>
                        <S.FinalizarCompra>Finalizar Compra</S.FinalizarCompra>
                    </S.CarrinhoFooter>

                </S.CarrinhoContainer>
            </>
        )}
</AnimatePresence>
    </>
  );
};

const drawerPanel = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%'},
    transition: { duration: 0.5, type: "spring"},
}