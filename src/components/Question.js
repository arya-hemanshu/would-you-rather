import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {formatDate} from '../_DATA'

class Question extends Component {
    render() {
        const {users, questions, id, answered, login} = this.props
        return (
            <Link to={`/question/${id}`} className='question'>
                
                
                <img src={`${users[questions[id].author].avatarURL}`} 
                        className='avatar' 
                        alt={`${questions[id].author}`}/>
                
                <div className='question-info'>
                <h3>
                    {users[questions[id].author].name} asks:
                </h3>
                    <p>Would you rather...</p>
                    {answered ?
                        <p>{
                            questions[id][`${users[login].answers[id]}`].text
                        }</p>
                     : <p>{questions[id].optionOne.text}</p>
                    }

                    <p className='active'>{`Posted at: ${formatDate(questions[id].timestamp)}`}</p>
                </div>

                
                
            </Link>
        )
    }
}


const mapStateToProps = ({users, questions, login}, {id, answered}) => {
    
    return {
        users,
        questions,
        login,
        id,
        answered
    }
}

export default connect(mapStateToProps)(Question)