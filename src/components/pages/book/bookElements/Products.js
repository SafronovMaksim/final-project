import React, { useState } from 'react';
import '../../../../styles/Product-card.scss';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Products(props){
    
    return(
        <Link to="/card">
        <div className='product-card'>
            <img className='product-card_image' src={props.imageUrl}/>
            <div className='product-card_text'>
                <div className='product-card_text-name'>{props.name}</div>
                <div className='product-card_text-description'>{props.description}</div>
                <div className='product-card_text-ingredients'>Ингредиенты:{props.ingrigients}</div>
                <div className='product-card_text-time'>Время приготовления:{props.cookingTime}</div>
            </div>
        </div>
        </Link>
        
        
    )
}
export default Products;


