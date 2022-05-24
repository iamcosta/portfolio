import React from 'react';
import { BsGithub, BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

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
                            <div className='contact-multiapp-icons'>
                                <FiMail color='#FFF' size={32} />
                            </div>
                            <Paragraph>{email}</Paragraph>
                        </div>
                        <div className='contact-tel'>
                            <div className='contact-multiapp-icons'>
                                <BsTelegram color='#FFF' size={32} />
                                <BsWhatsapp color='#FFF' size={32} />
                            </div>
                            <Paragraph>{tel}</Paragraph>
                        </div>
                    </div>
                    <div className='contact-social'>
                        <a href={social.git} target='blank'>
                            <BsGithub color='#FFF' size={32} />
                        </a>
                        <a href={social.in} target='blank'>
                            <BsLinkedin color='#FFF' size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;