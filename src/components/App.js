import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import setInitialData from '../actions/initial'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from './NewQuestion';
import Leadership from './Leadership'
import Poll from './Poll'
import LoadingBar from 'react-redux-loading'
import NotFound from './NotFound'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(setInitialData())
    
  }

  render() {
    if (Object.keys(this.props.users).length === 0) {
      return <LoadingBar />
    } else {

      if (this.props.login === null) {
        return <Login />
      }

    }
    

    return (
      <Router>
        <LoadingBar />
        <div className='container'>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/leadership' exact component={Leadership} />
            <Route path='/add' exact component={NewQuestion} />
            <Route path='/question/:id' component={Poll} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({login, users}) => {
  return {
    login,
    users
  }
}

export default connect(mapStateToProps)(App);
