import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import UserTodo from './userTodo';
import Home from './home';
import Todo from './todo'
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route path="/" exact strict component={Home}/>
          <Route path="/users" exact strict component={UserTodo} />
        <Route path="/todo" exact strict component={Todo} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
