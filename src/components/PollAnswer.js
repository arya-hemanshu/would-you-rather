import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleRecordVote} from '../actions/vote'

class PollAnswer extends Component {

    onChangeHandler = (value, otherOption) => {
        otherOption.checked = false
        this.props.dispatch(handleRecordVote(this.props.id, value))
    }

    render() {
        const {questions, users, id} = this.props
        return (
            <div className='center'>
                <div className='question'>
                    <img 
                        src={`${users[questions[id].author].avatarURL}`}
                        className='avatar'
                        alt={`${questions[id].author}`}
                        />
                    <div className='answer'>
                        <h3 style={{textAlign: "center"}}>{`${users[questions[id].author].name} asks:`}</h3>
                        
                        <table style={{borderSpacing: "20px"}}>
                            <tbody>
                                <tr style={{border: "20px"}}>
                                    <td>
                                    <input 
                            id='optionOne'
                            type='radio'
                            value={questions[id].optionOne.text}
                            onChange={e => this.onChangeHandler('optionOne', 
                                        document.getElementById('optionTwo'))}/>
                                    </td>
                                    <td>
                                        {questions[id].optionOne.text}
                                    </td>
                                </tr>
                            
                        
                            
                    
                        <tr>
                            <td>
                        <input 
                            id='optionTwo'
                            type='radio'
                            value={questions[id].optionTwo.text}
                            onChange={() => this.onChangeHandler('optionTwo', 
                                        document.getElementById('optionOne'))}/>
                                        </td>
                            <td>
                            {questions[id].optionTwo.text}</td>
                            </tr>

                            </tbody>
                        </table>
                        
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

export default connect(mapStateToProps)(PollAnswer)