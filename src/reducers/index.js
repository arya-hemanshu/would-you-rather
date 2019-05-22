import {combineReducers} from 'redux'
import questions from './questions'
import login from './authentication'
import users from './users'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    login,
    users,
    questions,
    loadingBar: loadingBarReducer
})