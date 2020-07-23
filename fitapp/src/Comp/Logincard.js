import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../Comp/cards.css';
import axios from 'axios';

const LoginCard = (props) =>{
    const defaultlogin = {
        username: '',
        password: '',
      }
    const [login,setLogin] = useState(defaultlogin);

    const change = (e) => {
        const value = e.target.value;
        setLogin({
          ...login,
          [e.target.name]: value
        });
    }

    const submit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/login`,login)
        .then((res) => {
            console.log('user logged in',res); 
        })
        .catch(er => {
            console.log('there was an error',er);
        })
    }
    

    return(
        <div className='container'>
            <h2>Login</h2>
            <form onSubmit={submit}>
            <input type='text' onChange={change} placeholder='Username' name='username' value={login.username}/>
            <input type='password' onChange={change} placeholder='Password' name='password' value={login.password}/>
            <button type='submit'>Login</button>
            </form>
            <Link to='/create'>Create Account</Link>
        </div>
    );
}

    export default LoginCard;
    
