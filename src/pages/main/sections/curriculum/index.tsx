import React, { CSSProperties } from 'react';
import { differenceInYears } from 'date-fns';
import './style.css';

// API
import data from '../../../../service/api/info.json';

// Components
import Paragraph from '../../../../components/paragraph';
import SectionSubtitle from '../../../../components/section-subtitle';
import SectionTitle from '../../../../components/section-title';

// Resources
import profilePic from '../../../../img/iam-profile.jpg';
import { BsPhone, BsServer, BsWindow } from 'react-icons/bs';

function Curriculum() {

    const { cv } = data;

    const pConfig: CSSProperties = {
        margin: '10px 0', 
        width: '100%',
    }

    return (
        <div className='cv-general'>
            <div className='cv-container'>
                <SectionTitle>
                    {'Currículo'}
                </SectionTitle>
                <div className='cv-content'>
                    <img 
                        className='cv-profile-pic' 
                        src={profilePic} 
                        title='Oi! Eu sou Iam!' 
                        alt='imagem de perfil' 
                    />
                    <SectionTitle style={{fontWeight: 'lighter', textTransform: 'none'}}>
                        {'Iam Barroso da Costa'}
                    </SectionTitle>
                    <Paragraph>
                        {`Brasileiro, Solteiro, ${differenceInYears(new Date(), new Date('1996-08-11'))} anos`}
                    </Paragraph>
                    <div className='cv-lang-abilities-container'>
                        <div className='cv-card'>
                            <SectionSubtitle style={{marginBottom: '15px'}}>
                                {'Idomas:'}
                            </SectionSubtitle>
                            {cv.langs.map(lang => {
                                return <Paragraph key={Math.random()}>{lang}</Paragraph>
                            })}
                        </div>
                        <div className='cv-card'>
                            <SectionSubtitle style={{marginBottom: '15px'}}>
                                {'Tecnologias:'}
                            </SectionSubtitle>
                            <BsWindow color='#fff' size={32}/>
                            <Paragraph>{cv.techs.web}</Paragraph>
                            <BsPhone color='#fff' size={32}/>
                            <Paragraph>{cv.techs.mobile}</Paragraph>                            
                            <BsServer color='#fff' size={32}/>
                            <Paragraph>{cv.techs.server}</Paragraph>
        
                            {/* <span>*em estudo</span> */}
                        </div>
                    </div>
                    <div className='cv-long-texts'>
                        <SectionSubtitle style={{margin: '20px 0'}}>
                            {'Objetivo'}
                        </SectionSubtitle>
                        <Paragraph style={pConfig}>{cv.objective}</Paragraph>
                        
                        <SectionSubtitle style={{margin: '20px 0'}}>
                            {'Formação'}
                        </SectionSubtitle>

                        {cv.titles.map(title => {
                            return <Paragraph key={Math.random()} style={pConfig}>{title}</Paragraph>
                        })}

                        <SectionSubtitle style={{margin: '20px 0'}}>
                            {'Experiência Profissional'}
                        </SectionSubtitle>

                        {cv.exps.map(exp => {
                            return <Paragraph key={Math.random()} style={pConfig}>{exp}</Paragraph>
                        })}

                        <SectionSubtitle style={{margin: '20px 0'}}>
                            {'Eventos'}
                        </SectionSubtitle>

                        {cv.events.map(event => {
                            return <Paragraph key={Math.random()} style={pConfig}>{event}</Paragraph>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum;