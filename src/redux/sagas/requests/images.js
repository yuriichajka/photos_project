import axios from 'axios';

export function requestGetImages() {
    return axios.request({
        method: 'get',
        url: 'https://boiling-refuge-66454.herokuapp.com/images'
    })
}