import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import './style.css';

function ImageArticle(props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
    return (
            <img
                {...props}
                alt={props.alt}
                className='img'
            />
    )
}

export default ImageArticle;