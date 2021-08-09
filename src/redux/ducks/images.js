import { call, put } from 'redux-saga/effects';

import { requestGetImages } from '../../api';

export const GET_IMAGES = 'GET_IMAGES';
export const SET_IMAGES = 'SET_IMAGES';

export const getImages = () => ({
    type: GET_IMAGES
});

export const setImages = (images) => ({
    type: SET_IMAGES,
    images
});

const initialState = {
    images: []
};

export function* handleGetImages(action) {
    try {
        const response = yield call(requestGetImages);
        const { data } = response;
        yield put(setImages(data));
    } catch (error) {
        console.log(error)
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            const { images } = action;
            return { ...state, images }
        default:
            return state
    }
};
