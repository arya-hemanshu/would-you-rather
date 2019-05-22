import {_saveQuestionAnswer} from '../_DATA'
import {updateUserVote} from './users'
import {hideLoading, showLoading} from 'react-redux-loading'

export const VOTE = 'VOTE'

const recordVote = (login, id, optionName) => {
    return {
        type: VOTE,
        login,
        id,
        optionName
    }
}

export const handleRecordVote = (id, optionName) => {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const {login} = getState()
        return _saveQuestionAnswer({authedUser: login, 
            qid: id, 
            answer: optionName})
            .then(() => {
                dispatch(recordVote(login, id, optionName))
                dispatch(updateUserVote(login, id, optionName))
                dispatch(hideLoading())
            })
    }
}

