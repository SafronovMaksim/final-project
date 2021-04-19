import React,{useState} from 'react';

import Menu from './Menu';

function Catalog() {
  const [menuActive, setMenuActive]=useState(false)
  
  const items =[{value:'soup', href:'/catalog'},{value:"dessert", href:'/catalog'},{value:"pizzas", href:'http://catalog'}]
    return (
      <ul className='catalog' onClick={()=>setMenuActive(!menuActive)}>catalog
        <Menu active={menuActive} setActive={setMenuActive} header={'Menuasd'} items={items}/>
      </ul>
    ) 
  }

export default Catalog;

