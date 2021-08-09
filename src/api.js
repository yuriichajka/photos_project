import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/images'
})

const getPhoto = (id) => {
    return axiosInstance.get(id)
}

export function requestGetImages() {
    return axios.request({
        method: 'get',
        url: 'https://boiling-refuge-66454.herokuapp.com/images'
    })
}

export { getPhoto }
