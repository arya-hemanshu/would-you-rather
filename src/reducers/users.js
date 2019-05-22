import {ALL_USERS, UPDATE_USER_VOTE, ADD_QUESTION_TO_USER} from '../actions/users'

const users = (state={}, action) => {
    switch(action.type) {
        case ALL_USERS:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER_VOTE:
            return {
                ...state,
                [action.login]: {
                    ...state[action.login],
                    answers: {
                        ...state[action.login].answers,
                        [action.id]: action.optionName
                    }
                }
                
            }
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        default:
            return state
    }
}

export default users