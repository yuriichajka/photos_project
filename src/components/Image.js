import React from 'react';

import { Img } from '../styled/styledPhotos';

const Image = ({ item, onClick }) => <Img loading='lazy'
                                          width='300px'
                                          height='200px'
                                          src={ item }
                                          onClick={ onClick }/>

export default Image;