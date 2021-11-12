import React from 'react';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

const CartItems = ({ item }) => {
    
    const removeFromCart = item => {
        dispatchEvent({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
    };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatchEvent({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });
        }
    };

    return (
        // style here later
        <span>placeholder</span>
    )
};

export default CartItems;