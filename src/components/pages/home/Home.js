import React from 'react';
import '../../../styles/Home.scss';
import SimpleSlider from './Slider';
import Intro from './Intro';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SelectMenu from './SelectMenu';

function Home() {
    return (
      <div className='page-wrapper'>
        <SimpleSlider/>
        <Intro/>
        <h1>Основные категории:</h1>
        <SelectMenu/>
      </div>
      

    );
  }
  
export default Home;