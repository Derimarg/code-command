import React from 'react';
import CartItems from '../CartItems';
import { productData } from '../Products';
import Auth from '../../utils/auth';
import { TOGGLE_CART } from '../../utils/actions';


const Cart = () => {

    function toggleCart() {
        dispatchEvent({ type: TOGGLE_CART });
    };

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    return(
        // add style here
        <span>placeholder</span>
    )
};

export default Cart;
