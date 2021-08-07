import { call, put } from 'redux-saga/effects'

import { requestGetImages } from '../requests/images';
import { setImages } from '../../ducks/images';

export function* handleGetImages(action) {
    try {
        const response = yield call(requestGetImages);
        const { data } = response;
        yield put(setImages(data));
    } catch (error) {
        console.log(error)
    }
}