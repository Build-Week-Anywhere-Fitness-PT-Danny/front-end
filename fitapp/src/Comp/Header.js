import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './header.css';


const AltNav = props => {
    const userNull = null;
    const defaultlogin = {
        username: '',
        password: '',
      }
    const [login,setLogin] = useState(defaultlogin);
    const [currentUser, setCurrentUser] = useState(userNull);

    const change = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value
        });
    }

    const submit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/login`,login)
        .then((res) => {
            setCurrentUser(res.data);
            console.log('user logged in',res); 
        })
        .catch(er => {
            console.log('there was an error',er);
        })
    }

    if(currentUser == null){
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/postClass'>Post Class</Link>
            </nav>
            <form className='hform'onSubmit={submit}>
                <input type='text' onChange={change} placeholder='Username' name='username' value={login.username}/>
                <input type='password' onChange={change} placeholder='Password' name='password' value={login.password}/>
                <button type='submit'>Login</button>
            </form>
            <div>
            <Link to='/createAccount'>Create Account</Link>
            </div>
            
        </header>
    )}
    else {
        return(<header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/postClass'>Post Class</Link>
            </nav>
        <p>{currentUser.message}</p>
        </header>)
    }
}

export default AltNav;