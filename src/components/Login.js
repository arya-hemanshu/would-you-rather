import React, { Component } from 'react'
import {connect} from 'react-redux'
import setLoggedInUser from '../actions/authentication'

class Login extends Component {

    onChangeHandler = e => {
        e.preventDefault()
        this.props.dispatch(setLoggedInUser(e.target.value))
    }

    render() {
        return (
            <div className='logincontainer'>
                <div className='login'>
                    <h3 className='center'>Welcome to Would You Rather...</h3>
                    <p>Choose User to Login</p>
                    <select onChange={this.onChangeHandler}>
                        <option value='none' key='none'>Select</option>
                        {
                            this.props.users !== undefined &&
                            Object.keys(this.props.users)
                                    .map(user => (
                                        <option value={user} key={user}>
                                            {this.props.users[user].name}
                                        </option>
                                    ))
                        }
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)