import { LOGGED_IN_USER, LOGGED_OUT_USER } from '../actions/authentication'

const login = (state = null, action) => {
    switch(action.type) {
        case LOGGED_IN_USER:
            return action.id
        case LOGGED_OUT_USER:
            return null
        default:
            return state
    }
}

export default login