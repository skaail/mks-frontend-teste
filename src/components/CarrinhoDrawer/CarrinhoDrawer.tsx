"use client";

import React, { useState, useEffect, useRef } from "react"
import * as S from "./styles"
import { motion, useAnimation } from "framer-motion"
import { PiShoppingCartBold } from "react-icons/pi"
import { IoIosCloseCircle } from "react-icons/io"

export const CarrinhoDrawer = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <>
    
    <S.BtnCarrinho onClick={(e) => {setOpen(!open)}}>
      <PiShoppingCartBold size={20} />
      <S.CarrinhoContador>0</S.CarrinhoContador>
    </S.BtnCarrinho>

        {open && (
            <>
                <S.CarrinhoContainer>

                    <S.CarrinhoHeader>
                        <S.CarrinhoTitulo>Carrinho de Compras</S.CarrinhoTitulo>
                        <S.CarrinhoFechar><IoIosCloseCircle size={38} onClick={(e) => {setOpen(!open)}}/></S.CarrinhoFechar>
                    </S.CarrinhoHeader>

                    <S.CarrinhoBody>
                        <S.ListaItens>
                            <S.ItemCarrinho></S.ItemCarrinho>
                        </S.ListaItens>
                            
                        <S.CarrinhoTotal>
                            <p>Total</p>
                            <p>R$798</p>
                        </S.CarrinhoTotal>
                    </S.CarrinhoBody>

                    <S.CarrinhoFooter>
                        <S.FinalizarCompra>Finalizar Compra</S.FinalizarCompra>
                    </S.CarrinhoFooter>

                </S.CarrinhoContainer>
            </>
        )}

    </>
  );
};
