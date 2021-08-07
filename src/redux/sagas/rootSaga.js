import { takeLatest } from 'redux-saga/effects'

import { handleGetImages } from './handlers/images';
import { GET_IMAGES } from '../ducks/images'

export function* watcherSaga() {
    yield takeLatest(GET_IMAGES, handleGetImages)
}