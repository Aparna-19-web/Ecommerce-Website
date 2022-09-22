import React from 'react'
import PropTypes from 'prop-types';
import '../Components/itempage.css';
import Item from '../Components/Item';

function ItemPage({items, onAddToCart}) {
  return (
    <ul className='ItemPage-items'>
        {items.map(item => 
            <li key={item.id} className='ItemPage-item'>
                <Item item={item}>
             <button className='Item-addTocart' onClick={()=> onAddToCart(item)}>
                Add to Cart
              </button>
              </Item>
            </li>)}
    </ul>
  );
}
ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart:PropTypes.array.isRequired
}

export default ItemPage



