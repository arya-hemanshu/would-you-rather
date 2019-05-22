import React, {Component} from 'react'
import {connect} from 'react-redux'

class Leadership extends Component {
    render() {

        const {users} = this.props
        const scores = {}
        Object.keys(users).forEach(key => {
            scores[key] = Object.keys(users[key].answers).length + 
                            users[key].questions.length
        })

        const sortedUsers = Object.keys(scores).sort((a, b) => scores[b] - scores[a])
        
        return (
            <div className='center'>

                {
                    sortedUsers.map(key => (

                        <div key={key} className='question'>
                            <img src={`${users[key].avatarURL}`} 
                                    className='avatar'
                                    alt={`${key}`}/>
                            <div className='question-info'>
                                <h3>{users[key].name}</h3>
                                <div>
                                    {`Answered Questions: ${Object.keys(users[key].answers).length}`}
                                    <hr/>
                                    {`Created Questions: ${users[key].questions.length}`}
                                </div>
                            </div>
                            <div className='question-info'>
                                <h3>Total Score: </h3>
                                <p className='center'>
                                    {scores[key]}
                                </p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        )
    }
}

const mapStateToProps = ({users, questions, login}) => {
    return {
        users,
        questions,
        login
    }
}

export default connect(mapStateToProps)(Leadership)