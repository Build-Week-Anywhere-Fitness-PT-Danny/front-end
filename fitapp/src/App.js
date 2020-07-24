import React, {useState, useEffect} from 'react';
import './App.css'; 
import LoginCard from './Comp/Logincard';
import {Switch, Route, Link} from 'react-router-dom';
import CreateAccount from './Comp/CreateAccount';
import CreateClass from './Comp/CreateClass';
import AltNav from './Comp/Header';

function App() {
  const [currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
      <AltNav />
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            
          </Route>
          <Route path='/createAccount'>
            <CreateAccount />
          </Route>
          <Route path='/postClass'>
            <CreateClass />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
