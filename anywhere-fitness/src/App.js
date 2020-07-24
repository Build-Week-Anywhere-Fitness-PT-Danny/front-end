import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
import SignUp from './Components/Register/SignUp'
import InstructorLogin from './Components/Instructor/InstructorLogin'
import InstrutorApp from './Components/Instructor/InstructorApp'


function App() {


  return (
    <Router>
      <div className="App">
        <p>Anywhere Fitness React App</p>
        <Link to="/">Home</Link>
        <Link to="/SignUp">Sign Up</Link>
        <Route path="/SignUp"><SignUp /></Route>
        <Link to="/InstructorLogin">Instructor Login</Link>
        <Route path="/InstructorLogin"><InstructorLogin/></Route>
        <Route path="/InstructorApp"><InstrutorApp /></Route>
        <Link to="/InstructorApp">Create Workout</Link>
      </div>
    </Router>
  );
}

export default App;
