import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import CreateClass from './components/CreateClass';
import Login from './components/Login';
// import SignUp from './components/Components/Register/SignUp';
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
          <PrivateRoute path="/protected/create" component={CreateClass} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
