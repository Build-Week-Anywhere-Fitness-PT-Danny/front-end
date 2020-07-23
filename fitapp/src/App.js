import React, {useState, useEffect} from 'react';
import './App.css'; 
import LoginCard from './Comp/Logincard';
import {Switch, Route} from 'react-router-dom';
import CreateAccount from './Comp/CreateAccount';
import CreateClass from './Comp/CreateClass';

function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LoginCard />
        </Route>
        <Route path='/createAccount'>
          <CreateAccount />
        </Route>
        <Route path='/createClass'>
          <CreateClass />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
