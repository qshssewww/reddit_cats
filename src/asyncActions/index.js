import {addCats, isLoad} from "../store/catReducer";
export const fetchCats = (after) => {
    return (dispatch) => {
        fetch(`https://www.reddit.com/r/cats.json?limit=5${after ? '&after=' + after : ''}`)
            .then(response => response.json())
            .then(json => dispatch(addCats(json.data)))
            .catch(err => {
                console.warn(err)
            })
            .finally(() => dispatch(isLoad(false)))
    }
}

