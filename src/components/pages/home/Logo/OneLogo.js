import React from 'react';
import oneItem from '../../../../img/first.jpg';



export default function LogoFirst() {
    return <a href='http://localhost:3000/catalog'><img  src={oneItem} alt={'logo'} className='select-menu_item_logo'/></a>;
  }
