import React from 'react';

import { Img } from '../styled/styledPhotos';

interface ImageProps {
    item?: string;
    onClick?: () => void;
}

const Image: React.FC<ImageProps> = ({item, onClick}) => (
    <Img
        className='test'
        loading='lazy'
        width='300px'
        height='200px'
        src={ item }
        onClick={ onClick }
    />
);

export default Image;
