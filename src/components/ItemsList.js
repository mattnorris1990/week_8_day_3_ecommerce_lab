import React from "react"
import Item from "./Item"


const ItemsList = ({items, updateCustomerBasket}) => {

    const itemsList = items.map((item, index) => {
        return ( 
            <Item item= {item} key = {index} updateCustomerBasket = {updateCustomerBasket}/>

        )
        
    })

    return (

        <>
            {itemsList}
        </>
    )
}

export default ItemsList