import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useSelector } from 'react-redux';
const Home = () => {
    const dispatch=useDispatch();
    const result=useSelector((state)=>state.cartData);
    console.log(result);
    const data={phone:"Iphone",price:1000,color:"red"};
    return (
        <div>
            <div className='add-to-cart'>
                <img src='/images/cart.jpg' />
                <span>{result.length}</span>
            </div>
            <h1>Home page</h1>
            <div  className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='/images/iphone.jpeg'/>
                </div>
                <div className='text-wrapper item'>
                    <span>I-Phone</span>
                    <span>price : $1000.00</span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={()=>dispatch(addToCart(data))}>Add to cart</button>
                    <button onClick={()=>dispatch(removeFromCart(data))}>Remove from cart</button>
                    <button onClick={()=>dispatch(emptyCart(data))}>Empty cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;