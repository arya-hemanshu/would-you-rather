import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import Login from './Login'
import {logUserOut} from '../actions/authentication'

class Nav extends Component {

    onClickHandler = () => {
        this.props.history.push('/')
        this.props.dispatch(logUserOut())
    }

    render() {
        if(this.props.login === null) {
            return <Login />
        }
        return(
            <div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leadership' activeClassName='active'>
                                LeaderBoard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add' activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                    </ul>
                    <span style={{float: "right"}}>
                        {`Hello, ${this.props.users[this.props.login].name} `}
                        <button className='logbtn' onClick={this.onClickHandler}>
                            Logout
                        </button> 
                    </span>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = ({users, login}) => {
    return {
        users,
        login
    }
}

export default withRouter(connect(mapStateToProps)(Nav))