import React from "react"
import styled from 'styled-components'
import CustomerContext from "../context/CustomerContext"

const Item = ({item, updateCustomerBasket}) => {

    const ItemBlock = styled.div`
    background-color: #99ccff;
    padding: 2em;
    border-radius: 30px;
    
    `

    const ItemTitle = styled.h3`
        background-color: #335577;
        color: white;
        padding: 1em;
        border-radius: 20px;
    `


    const handleClick = () => {
        updateCustomerBasket(item)
    }

    return (
        <>
            <ItemBlock>
                <img src={item.image} height="150"/>
                <ItemTitle>{item.name}</ItemTitle>
                <p>£{item.price} / per unit</p>
                <p>{item.description}</p>
                <button onClick={handleClick}>+ add to basket</button>
            </ItemBlock>
        </>
    )
}

export default Item