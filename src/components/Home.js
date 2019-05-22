import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Home extends Component {

    state = {
        toggle_answer: false
    }

    onClickHandler = e => {
        if(e.target.value === 'unanswered') {
            this.setState({toggle_answer: false})
        } else {
            this.setState({toggle_answer: true})
        }
    }

    render() {
        let answered = []
        let unanswered = []

        const {questions, users, login} = this.props

        const sortedQuestions = Object.keys(questions)
                                .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

        sortedQuestions.forEach(key => {
            if (key in users[login].answers) {
                answered.push(key)
            } else {
                unanswered.push(key)
            }
        })

        return(
            <div className='center'>
                <button className='btn'
                        value='unanswered'
                        onClick={this.onClickHandler}
                        autoFocus>Unanswered</button>
                <button className='btn'
                        value='answered'
                        onClick={this.onClickHandler}>Answered</button>

                <div style={{width: "100%", alignContent: "center", alignItems: "center"}}>
                <ul>
                    {
                        this.state.toggle_answer 
                            ? answered.map(id => (<li key={id}><Question id={id} answered={true}/></li>))
                            : unanswered.map(id => (<li key={id}><Question id={id} answered={false}/></li>))
                    }
                </ul>
                </div>
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

export default connect(mapStateToProps)(Home)