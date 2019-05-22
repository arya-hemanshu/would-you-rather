import React, {Component} from 'react'
import {connect} from 'react-redux'

class PollStats extends Component {
    render() {
        const {questions, id, login, users} = this.props
        const question = questions[id]
        const userAns = users[login].answers[id]
        const totalVotes = question.optionOne.votes.length + 
                            question.optionTwo.votes.length
        const optionOne = question.optionOne.votes.length > 0 
                            ? parseFloat((question.optionOne.votes.length/totalVotes).toFixed(2))*100
                            : 0
        const optionTwo = question.optionTwo.votes.length > 0 
                            ? parseFloat((question.optionTwo.votes.length/totalVotes).toFixed(2))*100
                            : 0

        
        return (
            <div className='center'>
                <div className='question'>
                    <h3>
                        {`Asked by ${users[questions[id].author].name}`}
                    </h3>
                    <img src={`${users[questions[id].author].avatarURL}`} 
                        className='avatar'
                        alt={`${questions[id].author}`} />
                    <div className='question-info'>
                        <p><b>Results:</b></p>
                        <div className={userAns === 'optionOne' ? 'options-green' : 'options-red'}>
                            <p className='content'>
                                {`Would you rather ${questions[id].optionOne.text}`} 
                                <br/><br/>
                                <span style={{color: 'white'}}>{`Percentage of people voted for this are ${optionOne}%`}</span>

                                
                            </p>
                            <p className='center'>
                                {`${question.optionOne.votes.length} out of ${totalVotes}`}
                            </p>
                        </div>

                        <div className={userAns === 'optionTwo' ? 'options-green' : 'options-red'}>
                            <p className='content'>
                                {`Would you rather ${questions[id].optionTwo.text}`}
                                <br/><br/>
                                <span style={{color: 'white'}}>{`Percentage of people voted for this are ${optionTwo}%`}</span>
                            </p>
                            <p className='center'>
                                {`${question.optionTwo.votes.length} out of ${totalVotes}`}
                            </p>

                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users, questions, login}, {id}) => {
    return {
        users,
        questions,
        login,
        id
    }
}

export default connect(mapStateToProps)(PollStats)