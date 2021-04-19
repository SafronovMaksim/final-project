import React, {Component} from 'react';
import Slider from "react-slick";
import '../../../styles/Intro.scss';

export default function Intro(){
    return(
        <div className='intro-conteiner'>
            <div className='intro-content'>
            Ищите рецепты, выбирая категорию блюда, его подкатегорию, кухню или меню. А в дополнительных фильтрах можно искать по нужному (или ненужному) ингредиенту: просто начните писать его название и сайт подберет соответствующий.
            </div>
        </div>
    )
}