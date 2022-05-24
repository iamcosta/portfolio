import React from 'react';

import './style.css';

// API
import data from '../../../../service/api/info.json';

// Components
import Paragraph from '../../../../components/paragraph';
import SectionTitle from '../../../../components/section-title';

// Resources
import olIcon from '../../../../img/icons/ol-icon.png';
import telIcon from '../../../../img/icons/telegram-icon.png';
import wppIcon from '../../../../img/icons/wpp-icon.png';
import linkedinIcon from '../../../../img/icons/linkedin-icon.png';
import githubIcon from '../../../../img/icons/github-icon.png';

function Contact() {

    const { email, tel, social } = data.contact;

    return (
        <div className='contact-general'>
            <div className='contact-container'>
                <SectionTitle>
                    {'Contato'}
                </SectionTitle>
                <div className='contact-content'>
                    <div className='contact-email-tel-container'>
                        <div className='contact-email'>
                            <img className='contact-email-icon' src={olIcon} alt='Ícone do Outlook'/>
                            <Paragraph>{email}</Paragraph>
                        </div>
                        <div className='contact-tel'>
                            <div className='contact-multiapp-icons'>
                                <img className='contact-tel-icon' src={telIcon} alt='Ícone do Telegram' title='Telegram'/>
                                <img className='contact-wpp-icon' src={wppIcon} alt='Ícone do Whatsapp'title='Whatsapp'/>    
                            </div>
                            <Paragraph>{tel}</Paragraph>
                        </div>
                    </div>
                    <div className='contact-social'>
                        <a href={social.git} target='blank'>
                            <img className='contact-social-icon' src={githubIcon} alt='Ícone do Github' title='Meu Github'/>
                        </a>
                        <a href={social.in} target='blank'>
                            <img className='contact-social-icon' src={linkedinIcon} alt='Ícone do LinkedIn' title='Meu LinkedIn'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;