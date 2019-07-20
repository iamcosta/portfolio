import React from 'react';

import './style.css';

function ImageArticle(props) {
    return (
            <img
                className='img'
                style={{...props.style}}
                {...props}
                alt={props.alt}
            />
    )
}

export default ImageArticle;