import React, {useState, useEffect} from 'react';
import './altApp.css'; 
import {Switch, Route, Link} from 'react-router-dom';
import CreateAccount from './CreateAccount';
import CreateClass from './CreateClass';
import AltNav from './navLogin';
import HomePage from './home';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

function AltApp() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getPosts = () => {
      axios
      .get('https://anywhere-fitness-bw-2020.herokuapp.com/api/classes')

      .then(res => {
      console.log(res);
      setPosts(res.data);})

      .catch(er => {
      console.log(er,'did not work');
      })
    }
    getPosts();
  }, []);
  return (
    <div className="App">
      <AltNav />
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <HomePage posts={posts}/>
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

export default AltApp;
