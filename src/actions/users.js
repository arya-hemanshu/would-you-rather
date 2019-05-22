
export const ALL_USERS = 'ALL_USERS'
export const UPDATE_USER_VOTE = 'UPDATE_USER_VOTE'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

const allUsers = users => {
    return {
        type: ALL_USERS,
        users
    }
}

export const updateUserVote = (login, id, optionName) => {
    return {
        type: UPDATE_USER_VOTE,
        login,
        id,
        optionName

    }
}

export const addQuestionToUser = (question) => {
    return {
        type: ADD_QUESTION_TO_USER,
        question
    }
}

export default allUsers