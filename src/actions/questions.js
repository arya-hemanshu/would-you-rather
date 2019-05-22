import {_saveQuestion} from '../_DATA'
import {addQuestionToUser} from './users'
import {showLoading, hideLoading} from 'react-redux-loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ALL_QUESTIONS = 'ALL_QUESTIONS'

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const allQuestions = questions => {
    return {
        type: ALL_QUESTIONS,
        questions
    }
}

export const addQuestionHandler = (optionOne, optionTwo) => {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const {login} = getState()
        return _saveQuestion({optionOneText: optionOne, 
                                optionTwoText:optionTwo, 
                                author: login})
                .then(formattedQuestion => {
                    dispatch(addQuestion(formattedQuestion))
                    dispatch(addQuestionToUser(formattedQuestion))
                    dispatch(hideLoading())
                })

    }

}