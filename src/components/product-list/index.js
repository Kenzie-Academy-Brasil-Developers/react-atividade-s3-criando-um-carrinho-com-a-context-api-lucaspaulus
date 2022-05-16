import React from 'react';
import Button from '../Button';

import {useContext} from "react"

import { CatalogueContext } from '../../providers/catalogue';
import { CartContext } from '../../providers/cart';

import * as S from "./style"
function ProductList({type, bgColor}) {

    const {catalogue} = useContext(CatalogueContext)
    const {cart} = useContext(CartContext)
    return (
        <S.Container bgColor={bgColor}>
            {type === "catalogue" ? <p>Catalogo</p> : <p>Carrinho</p> }
            
            {type === "catalogue" && catalogue.map((item, index)=>(
                
                <S.List key={index}>
                    
                    {item.name}
                    <Button type={type} item={item}/>

                </S.List>
            ))}

            {type === "cart" && cart.map((item,index)=>(
                <>
                    <S.List key={index}>
                        {item.name} 
                        <Button type={type} item={item}/>
                    </S.List>
                </>
               

            ))}
        </S.Container>
    )
}

export default ProductList;
