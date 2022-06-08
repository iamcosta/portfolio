import React, { CSSProperties } from 'react';

// API
import data from '../../../../service/api/info.json';

// Style
import './style.css'

// Components
import SectionTitle from '../../../../components/section-title';
import Paragraph from '../../../../components/paragraph';
import ImageArticle from '../../../../components/image-article';

// Images
import ifrrImg from '../../../../img/ifrr-fachada.png';
import codingImg from '../../../../img/coding.jpg';
import codeImg from '../../../../img/code.png';


function AboutMe () {

    const imgStyle: CSSProperties = {
        border: '2px solid #9ea9f0',
        backgroundColor: '#9ea9f0',
        width: '320px',
        boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.5)',
    }

    const pConfig: CSSProperties = {
        textAlign: 'justify',
        textIndent: '50px',
        color: 'rgba(20, 20, 20, 0.9)',
        width: '440px',
        fontWeight: '300'
    }

    const { aboutMe } = data;

    return (
        <div className='about-general'>
            <div className='about-container'>
                <SectionTitle style={{color: '#553c8b'}}>
                    {'sobre mim'}
                </SectionTitle>
                <div className='about-content'>
                    <div className='about-article'>
                        <Paragraph
                            style={pConfig}
                        >
                            {aboutMe[0]}
                        </Paragraph>
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
                            style={pConfig}
                        >
                            {aboutMe[1]}
                        </Paragraph>
                    </div>
                    <div className='about-article'>
                    <Paragraph
                            style={pConfig}
                        >
                            {aboutMe[2]}
                        </Paragraph>
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