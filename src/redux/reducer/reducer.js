const initialState = {
    photos: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PHOTOS':
            return {...state, photos: [...action.payload]}
        default:
            return state;
    }
}

export { reducer }