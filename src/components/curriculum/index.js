import React from 'react';
import { differenceInYears } from 'date-fns';

import data from "../../api/info.json";

import './style.css';

import SectionTitle from '../section-title';
import SectionSubtitle from '../section-subtitle';
import Paragraph from '../paragraph';

import profilePic from '../../img/iam-profile.jpg';
import webIcon from '../../img/icons/web-icon.png';
import mobileIcon from '../../img/icons/mobile-icon.png'
import dbIcon from '../../img/icons/db-icon.png';

function Curriculum() {

    const { cv } = data;

    const pConfig = {
        margin: '10px 0', 
        width: '100%',
    }

    return (
        <div className='cv-general'>
            <div className='cv-container'>
                <SectionTitle title={'Currículo'} />
                <div className='cv-content'>
                    <img 
                        className='cv-profile-pic' 
                        src={profilePic} 
                        title='Oi! Eu sou Iam!' 
                        alt='imagem de perfil' 
                    />
                    <SectionTitle 
                        title={'Iam Barroso da Costa'}
                        style={{fontWeight: '500', textTransform: 'none'}}
                    />
                    <Paragraph text={`Brasileiro, Solteiro, ${differenceInYears(new Date(), new Date('1996-08-11'))} anos`}/>
                    <div className='cv-lang-abilities-container'>
                        <div className='cv-card'>
                            <SectionSubtitle 
                                subtitle={'Idomas:'}
                                style={{marginBottom: '15px'}}
                            />
                            {cv.langs.map(lang => {
                                return <Paragraph key={Math.random()} text={lang}/>
                            })}
                        </div>
                        <div className='cv-card'>
                            <SectionSubtitle 
                                subtitle={'Tecnologias:'}
                                style={{marginBottom: '0px'}}
                            />
                            <img className='cv-tech-icon' src={webIcon} alt='ícone de web' title='web side'/>
                            <Paragraph text={cv.techs.web}/>
                            <img className='cv-tech-icon' src={mobileIcon} alt='ícone de mobile' title='mobile side'/>
                            <Paragraph text={cv.techs.mobile}/>                            
                            <img className='cv-tech-icon' src={dbIcon} alt='ícone de banco de dados / server-side' title='server side'/>
                            <Paragraph text={cv.techs.server}/>
        
                            {/* <span>*em estudo</span> */}
                        </div>
                    </div>
                    <div className='cv-long-texts'>
                        <SectionSubtitle subtitle={'Objetivo'}
                            style={{margin: '20px 0'}}
                        />
                        <Paragraph text={cv.objective} style={pConfig}/>
                        
                        <SectionSubtitle subtitle={'Formação'}
                            style={{margin: '20px 0'}}
                        />

                        {cv.titles.map(title => {
                            return <Paragraph key={Math.random()} text={title} style={pConfig}/>
                        })}

                        <SectionSubtitle subtitle={'Experiência Profissional'}
                            style={{margin: '20px 0'}}
                        />

                        {cv.exps.map(exp => {
                            return <Paragraph key={Math.random()} text={exp} style={pConfig}/>
                        })}

                        <SectionSubtitle subtitle={'Eventos'}
                            style={{margin: '20px 0'}}
                        />

                        {cv.events.map(event => {
                            return <Paragraph key={Math.random()} text={event} style={pConfig}/>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum;