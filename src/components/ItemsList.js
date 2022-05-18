import React from "react"
import Item from "./Item"
import styled from "styled-components"


const ItemsList = ({items, updateCustomerBasket}) => {

    const ItemBlock = styled.div`
    display:flex;
    gap: 2em;
    justify-content: center;
    text-align: center;
    `

    const itemsList = items.map((item, index) => {
        return ( 
            <Item item= {item} key = {index} updateCustomerBasket = {updateCustomerBasket}/>

        )
        
    })

    return (

        <>
            <ItemBlock>
                {itemsList}
            </ItemBlock>
        </>
    )
}

export default ItemsList