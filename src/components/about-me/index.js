import React from 'react';

import data from '../../api/info.json';

// Style
import './style.css'

// Components
import SectionTitle from '../section-title';
import Paragraph from '../paragraph';
import ImageArticle from '../image-article';

// Images
import ifrrImg from '../../img/ifrr-fachada.png';
import codingImg from '../../img/coding.jpg';
import codeImg from '../../img/code.png';


function AboutMe () {

    const imgStyle = {
        border: '2px solid #9ea9f0',
        backgroundColor: '#9ea9f0',
        width: '320px',
        boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.5)',
    }

    const pConfig = {
        textAlign: 'justify',
        textIndent: '50px',
        color: 'rgba(20, 20, 20, 0.9)',
        width: '440px'
    }

    const { aboutMe } = data;

    return (
        <div className='about-general'>
            <div className='about-container'>
                <SectionTitle title={'sobre mim'} style={{color: '#553c8b'}}/>
                <div className='about-content'>
                    <div className='about-article'>
                        <Paragraph 
                            text={aboutMe[0]}
                            style={pConfig}
                        />
                        <ImageArticle
                            style={{...imgStyle}}
                            src={ifrrImg}
                            alt={'Fachada do IFRR'} 
                        />
                    </div>
                    <div className='about-article about-article-wrap-reverse'>
                        <ImageArticle 
                            style={{...imgStyle}}
                            src={codingImg}
                            alt={'Trabalhando em projeto'}
                        />
                        <Paragraph 
                            text={aboutMe[1]}
                            style={pConfig}
                        />
                    </div>
                    <div className='about-article'>
                        <Paragraph 
                            text={aboutMe[2]}
                            style={pConfig}
                        />
                        <ImageArticle 
                            style={{...imgStyle}}
                            src={codeImg}
                            alt={'Ambiente de desenvolvimento'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;