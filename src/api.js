import axios from 'axios';

const PATH = 'https://boiling-refuge-66454.herokuapp.com/images'

let axiosInstance = axios.create({
    baseURL: PATH
})

const getPhoto = (id) => {
    return axiosInstance.get(id)
}

export function requestGetImages() {
    return axios.request({
        method: 'get',
        url: PATH
    })
}

export { getPhoto }
