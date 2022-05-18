import React, { useContext } from "react"
import BasketItem from "./BasketItem"
import CustomerContext from "../context/CustomerContext"

const BasketList = ({items}) => {

    // console.log(items)

    const value = useContext(CustomerContext)

    const itemsNodes = items.map((item, index) => {
        // console.log("basket list", item)
        return (
        <BasketItem item={item} key={index}/>
        )
    })

    const totalAmount = () => {
        
        let total = 0

        items.map((item) => {
            total += item.price
        })

        return total
    }

    return (
        <>
        <h3>{value.customer.name}'s Basket</h3>
        <p>number of items: {items.length} | total cost: £{totalAmount()}</p>
        <ul>{itemsNodes}</ul>
        
        </>
    )
}

export default BasketList