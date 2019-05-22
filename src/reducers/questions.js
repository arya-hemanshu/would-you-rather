import { ADD_QUESTION, ALL_QUESTIONS } from '../actions/questions'
import {VOTE} from '../actions/vote'

const questions = (state={}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ALL_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case VOTE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.optionName]: {
                        ...state[action.id][action.optionName],
                        votes: state[action.id][action.optionName].votes.concat([action.login])
                    }
                    
                }
            }
        default:
            return state
    }
}

export default questions