import React from 'react';

import './style.css';

const SectionTitle = (props) => (    
    <h1 className='title' style={{...props.style}}>
        {props.title}
    </h1>
);


export default SectionTitle;