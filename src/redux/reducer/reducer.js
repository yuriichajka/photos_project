const initialState = {
    photos: [],
    showModal: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PHOTOS':
            return {...state, photos: [...action.payload]}
        default:
            return state;
    }
}

export const setPhotos = payload => ({type: 'SET_PHOTOS', payload})

export { reducer }