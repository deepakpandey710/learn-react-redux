import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constant'

export const addToCart=(data)=>{
    console.log("Action add to cart called",data);
    return{
        type:ADD_TO_CART,
        data
    }
}
export const removeFromCart=()=>{
    console.log("remove from cart");
    return{
        type:REMOVE_FROM_CART,
    }
}
export const emptyCart=()=>{
    console.log("empty cart called");
    return{
        type:EMPTY_CART
    }
}