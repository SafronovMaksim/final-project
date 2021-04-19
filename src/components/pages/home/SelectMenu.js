import React from 'react';
import LogoFirst from './Logo/OneLogo';
import LogoSecond from './Logo/TwoLogo';
import LogoThree from './Logo/ThreeLogo';
import LogoFour from './Logo/FourLogo';
import LogoFive from './Logo/FiveLogo';
import LogoSix from './Logo/SixLogo';
import LogoSeven from './Logo/SevenLogo';
import LogoEight from './Logo/EightLogo';
import LogoNine from './Logo/NineLogo';

import '../../../styles/SelectMenu.scss';

export default function SelectMenu(){
    return(
        <div className='select-menu'>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoFirst/></div>
                <a href='' className='select-menu_item_description'>Супы</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoSecond/></div>
                <a href='' className='select-menu_item_description'>Гарниры</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoThree/></div>
                <a href='' className='select-menu_item_description'>Cалаты</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoFour/></div>
                <a href='' className='select-menu_item_description'>Закуски</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoFive/></div>
                <a href='' className='select-menu_item_description'>Напитки</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoSix/></div>
                <a href='' className='select-menu_item_description'>Соусы</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoSeven/></div>
                <a href='' className='select-menu_item_description'>Десерты</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoEight/></div>
                <a href='' className='select-menu_item_description'>Суши</a>
            </div>
            <div className='select-menu_wrapper'>
                <div className='select-menu_item'><LogoNine/></div>
                <a href='' className='select-menu_item_description'>Пиццы</a>
            </div>
        </div>
    )
}