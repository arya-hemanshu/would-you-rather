import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addQuestionHandler} from '../actions/questions'
import {withRouter} from 'react-router-dom'


class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        disabled: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const opOne = document.getElementById('optionOne').value
        const opTwo = document.getElementById('optionTwo').value

        this.props.dispatch(addQuestionHandler(opOne, opTwo))
        this.props.history.push('/')

    }

    onChangeHandler = (value, option) => {
        this.setState(() => ({
            [`${option}`]: value
        }), () => {
            this.setState({disabled: this.state.optionOne !== '' && this.state.optionTwo !== ''})
        })

    }

    render() {
        return (
            <div>
                <h3 className='center'>Create New Question</h3>
                
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <h4>Would You Rather...</h4>
                    <input id='optionOne' 
                            type='text' 
                            value={this.state.optionOne}
                            onChange={e => this.onChangeHandler(e.target.value, 'optionOne')}/>
                    <p className='center'>OR</p>
                    <input id='optionTwo' 
                            type='text' 
                            value={this.state.optionTwo}
                            onChange={e => this.onChangeHandler(e.target.value, 'optionTwo')}/>
                    <p>
                        <button 
                        id='saveQuestion'
                        className='btn'
                        type='submit'
                        disabled={!this.state.disabled}>
                            Add Question
                        </button>
                    </p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({login}) => {
    return {
        login
    }

}

export default withRouter(connect(mapStateToProps)(NewQuestion))