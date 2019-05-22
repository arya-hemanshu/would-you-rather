

export const LOGGED_IN_USER = 'LOGGED_IN_USER'
export const LOGGED_OUT_USER = 'LOGGED_OUT_USER'

const setLoggedInUser = id => {
    return {
        type: LOGGED_IN_USER,
        id
    }
}

export const logUserOut = () => {
    return {
        type: LOGGED_OUT_USER
    }
}

export default setLoggedInUser