import React, {Component} from 'react'
import {connect} from 'react-redux'
import PollAnswer from './PollAnswer'
import PollStats from './PollStats'
import NotFound from './NotFound'

class Poll extends Component {
    render() {
        if (!(this.props.id in this.props.questions)) {
            return <NotFound />
        }

        return (
            <div>
                {
                    this.props.id in this.props.users[this.props.login].answers
                    ? <PollStats id={this.props.id}/>
                    : <PollAnswer id={this.props.id}/>
                }
            </div>
        )
    }
}

const mapStateToProps = ({users, questions, login}, props) => {
    const {id} = props.match.params
    return {
        users,
        questions,
        login,
        id
    }
}

export default connect(mapStateToProps)(Poll)