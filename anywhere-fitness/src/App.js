import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import CreateClass from './components/CreateClass.js';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route path="/">
          <Redirect to="/login" />
        </Route> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/protected" component={Dashboard} />
          <PrivateRoute path="/create" component={CreateClass} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
