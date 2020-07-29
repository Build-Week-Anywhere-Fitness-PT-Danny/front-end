import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Switch, Route, Link} from 'react-router-dom';
import CreateAccount from './CompAW/CreateAccount';
import CreateClass from './CompAW/CreateClass';
import AltNav from './CompAW/navLogin';
import HomePage from './CompAW/home';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

function App() {
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

export default App;
