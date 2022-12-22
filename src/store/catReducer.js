const defaultState = {
    cats: [],
    after: '',
    isLoading: true,
}

const ADD_CATS = "ADD_CATS"
const IS_LOAD = 'IS_LOAD'
export const catReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_CATS:
            return {...state, cats: [...state.cats, ...action.payload.children], after: action.payload.after}
        case IS_LOAD:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export const addCats = (payload) => ({type: ADD_CATS, payload})
export const isLoad = (payload) => ({type: IS_LOAD, payload})


