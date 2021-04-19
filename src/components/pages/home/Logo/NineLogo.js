import React from 'react';
import nineItem from '../../../../img/nine.jpg';

export default function LogoNine() {
    return <a href='http://localhost:3000/catalog'><img  src={nineItem} alt={'logo'} className='select-menu_item_logo'/></a>;
}