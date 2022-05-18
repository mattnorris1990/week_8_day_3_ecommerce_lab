import React from "react";

const BasketItem = ({item}) => {
    // console.log(item)
    return (
        <li>{item.name} - £{item.price} / per item</li>
    )
}

export default BasketItem