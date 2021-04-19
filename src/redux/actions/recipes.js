import axios from 'axios';
 
export const setLoaded = (payload)=>({
    type: 'SET_LOADED',
    payload,
})

export const fetchRecipes =(category)=> (dispatch) =>{
    console.log(category);
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/recipes?${category !==0 ? `kitchen=${category}`: ''}`).then(({data})=>{
        dispatch(setRecipes(data));
      });
};

export const setRecipes = (items)=>({
    type: 'SET_RECIPES',
    payload:items,
});