import React from "react";
import PropTypes from 'prop-types';
import Item from '../Components/Item';
import './cart.css';

function Cart({ items, onAddOne, onRemoveOne }) {
    let getCartTotal = () => {
        let cartTotal = 0;
        items.map((itm, index) => {
            cartTotal += itm.price;
        });
        return cartTotal;
    }

    return (
        <>
            <ul className="CartPage-item">
                {items.map(item =>
                    <>
                        <li key={item.id} className='CartPage-item'>
                            <Item item={item}>
                                <div className="CartItem-controls">
                                    <button className="CartItem-removeOne btn btn-primary" onClick={() => onRemoveOne(item)}>Remove</button>
                                    
                                </div>

                            </Item>
                        </li>
                    </>
                )}
            </ul>
            <div className="CartItem-total">Cart Total: ${getCartTotal()}</div>
        </>
    )
}
                
Cart.protoTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
}
             
export default Cart;