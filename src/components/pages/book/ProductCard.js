import React from 'react';
import '../../../styles/RecipeBook.scss';
import '../../../styles/Filter.scss';
import {Redirect} from 'react-router-dom';
import Products from './bookElements/Products';


function ProductCard(props) {
    
    return (
    <div className='wrapper'>
        <div>{props.name}</div>
    </div>
    );
  }
  
export default ProductCard;