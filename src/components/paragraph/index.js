import React from 'react';

import './style.css';

const Paragraph = (props) => {

    return (
        <p className='p-content' style={{...props.style}}>
            {props.text}
        </p>
    )
}

export default Paragraph;