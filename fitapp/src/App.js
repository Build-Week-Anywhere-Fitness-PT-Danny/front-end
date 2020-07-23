import React, {useState, useEffect} from 'react';
import './App.css'; 
import LoginCard from './Comp/Logincard';
import {Link, Switch, Route} from 'react-router-dom';
import CreateAccount from './Comp/CreateAccount';
import axios from 'axios';

function App() {
  
  // useEffect(() => {
  //   axios
  //     .get('https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/users')
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(er => {
  //       console.log(er)
  //     });
  // });
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
