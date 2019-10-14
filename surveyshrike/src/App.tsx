import React from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/LoginPage/LoginPage';
import Form from './components/CreateForm/CreateForm';

export default class App extends React.Component<any, any>{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/form' component={Form} />
          <Redirect from="*" to='/test' />
        </Switch>

      </BrowserRouter>

    );
  }
}

