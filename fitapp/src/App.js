import React, {useState, useEffect} from 'react';
import './App.css'; 
import LoginCard from './Comp/Logincard';
import {Switch, Route, Link} from 'react-router-dom';
import CreateAccount from './Comp/CreateAccount';
import CreateClass from './Comp/CreateClass';

function App() {
  

  return (
    <div className="App">
      <nav>
        <Link to='/postClass'>Post Class</Link>
        <Link to='/'>Home</Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <LoginCard />
        </Route>
        <Route path='/createAccount'>
          <CreateAccount />
        </Route>
        <Route path='/postClass'>
          <CreateClass />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
