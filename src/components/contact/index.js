import React from 'react';

import './style.css';

import data from '../../api/info.json';

import SectionTitle from '../section-title';
import Paragraph from '../paragraph';

import olIcon from '../../img/icons/ol-icon.png';
import telIcon from '../../img/icons/telegram-icon.png';
import wppIcon from '../../img/icons/wpp-icon.png';
import linkedinIcon from '../../img/icons/linkedin-icon.png';
import githubIcon from '../../img/icons/github-icon.png';

function Contact() {

    const { email, tel, social } = data.contact;

    return (
        <div className='contact-general'>
            <div className='contact-container'>
                <SectionTitle title={'Contato'}/>
                <div className='contact-content'>
                    <div className='contact-email-tel-container'>
                        <div className='contact-email'>
                            <img className='contact-email-icon' src={olIcon} alt='Ícone do Outlook'/>
                            <Paragraph text={email}/>
                        </div>
                        <div className='contact-tel'>
                            <div className='contact-multiapp-icons'>
                                <img className='contact-tel-icon' src={telIcon} alt='Ícone do Telegram' title='Telegram'/>
                                <img className='contact-wpp-icon' src={wppIcon} alt='Ícone do Whatsapp'title='Whatsapp'/>    
                            </div>
                            <Paragraph text={tel}/>
                        </div>
                    </div>
                    <div className='contact-social'>
                        <a href={social.git} target='blank'>
                            <img className='contact-social-icon' src={githubIcon} alt='Ícone do Github' title='Meu LinkedIn'/>
                        </a>
                        <a href={social.in} target='blank'>
                            <img className='contact-social-icon' src={linkedinIcon} alt='Ícone do LinkedIn' title='Meu Github'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;