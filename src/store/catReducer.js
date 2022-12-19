const defaultState = {
    cats: [],
    after: ''
}

const ADD_CATS = "ADD_CATS"
export const catReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_CATS:
            return {...state, cats: [...state.cats, ...action.payload.children], after: action.payload.after}
        default:
            return state
    }
}

export const addCats = (payload) => ({type: ADD_CATS, payload})


