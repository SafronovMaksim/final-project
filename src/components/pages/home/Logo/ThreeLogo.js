import React from 'react';
import threeItem from '../../../../img/three.png';

export default function LogoThree() {
    return <a href='http://localhost:3000/catalog'><img  src={threeItem} alt={'logo'} className='select-menu_item_logo'/></a>;
}