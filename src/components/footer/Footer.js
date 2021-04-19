import React from 'react';
import '../../styles/Footer.scss';
import LogoMts from './Logo/LogoMts';
import LogoVelcom from './Logo/LogoVelcom';
import LogoFacebook from './Logo/LogoFacebook';
import LogoInstagram from './Logo/LogoInstagram';
import LogoTwitter from './Logo/LogoTwitter';
import LogoTelegram from './Logo/LogoTelegram';
import Map from './Map';



export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer_contacts'>
                <div className='footer_contacts-phone'>Наши контакты:  
                    <div className='footer_contacts-phone-mts'><LogoMts/>МТС: +375(29) 839-90-30</div>
                    <div className='footer_contacts-phone-velcom'><LogoVelcom/>Velcom: +375(44) 577-90-11</div>
                </div>
                <div className='footer_contacts-social'>Мы в социальных сетях:
                    <div className='footer_contacts-social_conteiner'>
                        <a href='https://facebook.com/'><LogoFacebook/></a>
                        <a href='https://instagram.com/'><LogoInstagram/></a>
                        <a href='https://twitter.com/'><LogoTwitter/></a>
                        <a href='https://telegram.com/'><LogoTelegram/></a>
                    </div>
                </div>
                <div className='footer_contacts-location'>Мы находимся по адрессу:<span>г.Минск, ул.Тимирязева, д.67</span></div>
            </div>
            <div className='footer_map'><Map/></div>
        </footer>
    );
}
