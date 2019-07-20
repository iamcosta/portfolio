import React from 'react';

import './style.css';

function SectionSubtitle(props) {
    
    const style = {
        ...props.style,
    }

    return (
        <h2 className='subtitle' style={style}>
            {props.subtitle}
        </h2>   
    )
}

export default SectionSubtitle;