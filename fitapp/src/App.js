import React, {useState, useEffect} from 'react';
import './App.css'; 
import LoginCard from './Comp/Logincard';
import {Switch, Route} from 'react-router-dom';
import CreateAccount from './Comp/CreateAccount';

function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LoginCard />
        </Route>
        <Route path='/create'>
          <CreateAccount />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
