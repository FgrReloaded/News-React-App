import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey="4ab300bf7fef46f5a229c7300a23cdb6"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#2196f3'
          progress={this.state.progress}
        />
        <Switch>
          <Route exact path="/" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="general" country='in' bg='primary' category='general' />
          </Route>
          <Route exact path="/business" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="business" country='in' bg='success' category='business' />
          </Route>
          <Route exact path="/entertainment" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="entertainment" country='in' bg='warning' category='entertainment' />
          </Route>
          <Route exact path="/cricket" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="cricket" country='in' bg='danger' category='sport' query='cricket' />
          </Route>
          <Route exact path="/football" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="football" country='in' bg='danger' category='sport' query='football' />
          </Route>
          <Route exact path="/hockey" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="hockey" country='in' bg='danger' category='sport' query='hockey' />
          </Route>
          <Route exact path="/science" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="science" country='in' bg='info' category='science' />
          </Route>
          <Route exact path="/health" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="health" country='in' bg='secondary' category='health' />
          </Route>
          <Route exact path="/technology" >
            <News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} key="tech" country='in' bg='dark' category='technology' />
          </Route>
        </Switch>
      </Router>
    </>
    
    )
  }
}
