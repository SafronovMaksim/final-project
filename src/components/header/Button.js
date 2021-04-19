import React from 'react';
import logo from '../../img/brightness-high.svg';
import '../../styles/Button.scss';

function ButtonTopic() {
    return <button className='header_theme-switch'>
      <img src={logo} alt={'logo'}/>
    </button>;
  }

export default ButtonTopic;