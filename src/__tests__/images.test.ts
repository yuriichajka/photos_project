import photoReducer, {initialState, SET_IMAGES} from "../redux/ducks/images";

describe('duck test', () => {
    it('SET_IMAGES', () => {
        const action = {
            type: SET_IMAGES,
        }
        expect(photoReducer(initialState, action)).toEqual({
            ...initialState,
            images: undefined
        })
    })
})