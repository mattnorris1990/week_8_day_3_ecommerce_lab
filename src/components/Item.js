import React from "react"
import CustomerContext from "../context/CustomerContext"

const Item = ({item, updateCustomerBasket}) => {

    console.log(item)

    const handleClick = () => {
        updateCustomerBasket({item})
    }

    return (
        <>
            <div>
                <img src={item.image} height="100"/>
                <h3>{item.name}</h3>
                <p>£{item.price} / per unit</p>
                <p>{item.description}</p>
                <button onClick={handleClick}>+ add to basket</button>
            </div>
        </>
    )
}

export default Item