import React from 'react';

import { Img } from '../styled/styledPhotos';

const Image = ({ item, onClick }) => {
    return (
        <Img src={ item } onClick={ onClick }/>
    )
}

export default Image;