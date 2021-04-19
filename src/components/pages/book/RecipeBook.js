import React from 'react';
import '../../../styles/RecipeBook.scss';
import '../../../styles/Filter.scss';
import ButtonAdd from './bookElements/Button';
import InputSearch from './bookElements/Input';
import Categories from './bookElements/Categories';
import Products from './bookElements/Products';

import {setCategory} from '../../../redux/actions/filters';
import {fetchRecipes} from '../../../redux/actions/recipes';

import {useSelector,useDispatch} from 'react-redux';

const categoryNames = ['Все','Русская','Японская','Итальянская','Немецкая','Белорусская','Американская','Английская','Грузинская','Французская'];


function RecipeBook() {
    const dispatch = useDispatch();
    const items = useSelector(({recipes})=>recipes.items);
    const {category} = useSelector(({filters})=>filters   );
    

    React.useEffect(()=>{
        dispatch(fetchRecipes(category));
      },[category]);

    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index));
    },[]);
      
    return (
    <div className='wrapper'>
        <div className='book_wrapper'>
            <div className='book_filters'>Выберите кухню:
                <Categories 
                activeCategoryIndex={category}
                onClickItem={onSelectCategory}
                items={categoryNames} />
            </div>

            <div className='book_content'>
                <div className='book_content_elements'>
                    <ButtonAdd/>
                    <InputSearch/>
                </div>
                <div className='book_content_recipes'   >
                    {
                        items && items.map(obj => <Products  key={obj.id} {...obj}/>)
                    } 
                </div>
            </div>
        </div>
    </div>
    );
  }
  
export default RecipeBook;