import React, { useState } from 'react';
import '../../../../styles/RecipeBook.scss';

const Categories = React.memo(function Categories({activeCategoryIndex,items,onClickItem}){
    const onSelectItem=(index)=>{
        onClickItem(index);
    }
    
    return(
        <div className='book_filters_categories'>
            {items && items.map((name, index)=>
            <button 
                onClick={()=>onSelectItem(index)} 
                key={`${name}_${index}`} 
                className={'book_filters_categories_kitchen',
                (activeCategoryIndex === index ? 'book_filters_categories_kitchen--active':'book_filters_categories_kitchen')}>
                {name}
            </button>)}
        </div>
        
        
    )
})

export default Categories;