import React from 'react';
import twoItem from '../../../../img/two.jpg';

export default function LogoSecond() {
    return <a href='http://localhost:3000/catalog'><img  src={twoItem} alt={'logo'} className='select-menu_item_logo'/></a>;
}