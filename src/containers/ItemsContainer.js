import React, {useState, useEffect, useContext} from "react"
import ItemsList from "../components/ItemsList"
import BasketList from "../components/BasketList"
import bread from "../assets/bread.jpg"
import bananas from "../assets/bananas.jpg"
import beans from "../assets/beans.jpeg"
import CustomerContext from "../context/CustomerContext"
import styled from "styled-components"

const ItemsContainer = () => {

    const [listOfItems, setListOfItems] = useState([])
    const [customer, setCustomer] = useState({"name": "Matt", "basket": [], "cash": 10})
    

    const Items = [
        {"name" : "Bread", "price" : 1, "description" : 'Some really great bread, made by Hovis', "image" : bread},
        {"name" : "Bananas", "price" : 2, "description" : "a bunch of 5-7 bananas, all the same size", "image" : bananas},
        {"name" : "beans", "price" : 3, "description" : "Heinz Meanz Beanz - the original and best", "image" : beans},
    ]




    useEffect(() => {
        setListOfItems(Items)
    }, [])

    const updateCustomerBasket = (item) => {
        const newBasket = [...customer.basket]
        newBasket.push(item)
        const nextCustomer = {...customer, basket : newBasket}
        setCustomer(nextCustomer)
    };


    return (
        <>
            <CustomerContext.Provider value={{customer}}>

                    <ItemsList items = {listOfItems} updateCustomerBasket = {updateCustomerBasket}/>
                    <BasketList items = {customer.basket}/>
                    
            </CustomerContext.Provider>

        </>
    )

}


export default ItemsContainer