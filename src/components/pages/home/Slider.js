import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../../../styles/Slider.scss';
import sliderImage1 from '../../../img/slider-image1.jpg';




export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 10000,
        fade:true
      };
      return (
        <div className='slider-wrapper'>
          
          <Slider {...settings}>
            <div>
            <img src={sliderImage1} className='slider-image'></img>
            <div className='slider-text'>Только проверенные рецепты</div>
            </div>
            <div>
            <img src='https://tarotoday.ru/wp-content/uploads/2016/01/cook.jpg' className='slider-image' alt='sliderImage'></img>
            <div className='slider-text'>Справится даже самый маленький</div>
            </div>
            <div>
            <img src='https://img2.goodfon.ru/wallpaper/nbig/e/1c/borsch-smetana-myaso-hleb-chernyy.jpg' className='slider-image' alt='sliderImage'></img>
            <div className='slider-text'>Блюда любой кухни мира</div>
            </div>
            <div>
            <img src='https://avatars.mds.yandex.net/get-zen_doc/964926/pub_5acf3abb5f49679e0221d9b3_5acf3b119d5cb3b23dadb22d/scale_1200' className='slider-image' alt='sliderImage'></img>
            <div className='slider-text'>Необъятный каталог рецептов</div>
            </div>
          </Slider>
        </div>
      );
    }
  }
