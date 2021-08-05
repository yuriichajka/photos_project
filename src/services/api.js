import axios from 'axios';

let axiosInstance = axios.create({baseURL: 'https://boiling-refuge-66454.herokuapp.com'});

const getPhotos = () => {
    return axiosInstance.get('/images')
}

const getPhoto = (id) => {
    return axiosInstance.get('/images/' + id)
}

export { getPhotos, getPhoto }