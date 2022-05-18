import React from "react";

const BasketItem = ({item}) => {

    return (
        <li>{item.item.name} - {item.item.price}</li>
    )
}

export default BasketItem