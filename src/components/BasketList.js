import React, { useContext } from "react"
import BasketItem from "./BasketItem"
import CustomerContext from "../context/CustomerContext"

const BasketList = ({items}) => {

    console.log(items)

    const value = useContext(CustomerContext)

    const itemsNodes = items.map((item, index) => {
        return (
        <BasketItem item = {item} key={index}/>
        )
    })

    return (
        <>
        <h3>{value.customer.name}'s Basket</h3>
        <p>number of items: {items.length}</p>
        <ul>{itemsNodes}</ul>
        </>
    )
}

export default BasketList