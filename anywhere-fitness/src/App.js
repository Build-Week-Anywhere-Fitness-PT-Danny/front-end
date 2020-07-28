import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
