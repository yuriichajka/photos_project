import axios from 'axios';
import { IImages } from './components/Modal';

const PATH = 'https://boiling-refuge-66454.herokuapp.com/images'

let axiosInstance = axios.create({
    baseURL: PATH
})

const getPhoto = (id) => {
    return axiosInstance.get(id)
}

export function requestGetImages() {
    return axios.request<IImages>({
        method: 'get',
        url: PATH
    })
}

export { getPhoto }
