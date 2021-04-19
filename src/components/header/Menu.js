import React from 'react'
import '../../styles/Menu.scss';

const Menu =({header,items, active, setActive})=>{
    return(
        <div className={active ? 'menu active':'menu'} >
            <ul className='menu-content'onClick={e=>e.stopPropagation()}>
                {items.map(item=>
                    <li>
                        <a href={item.href}>{item.value}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Menu;