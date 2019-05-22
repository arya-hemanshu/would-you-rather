import allUsers from './users'
import {allQuestions} from './questions'
import {_getInitialData} from '../_DATA'
import {showLoading, hideLoading} from 'react-redux-loading'

const setInitialData = () => {
    return dispatch => {
        dispatch(showLoading())
        return _getInitialData()
                .then(({users, questions}) => {
                    dispatch(allUsers(users))
                    dispatch(allQuestions(questions))
                    dispatch(hideLoading())
                })
    }
}

export default setInitialData