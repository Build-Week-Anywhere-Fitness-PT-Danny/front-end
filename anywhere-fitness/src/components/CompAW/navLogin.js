import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './navLogin.css';
import {Menu, Button, Input,} from 'semantic-ui-react';


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
        <Menu size='large' color='red'>
            <Menu.Item color='red'>
                <Link to='/' >Home</Link>
            </Menu.Item>
            <Menu.Item >
                <Link to='/postClass'>Post Class</Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <Link to='/createAccount'>Create Account</Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <form className='hform'onSubmit={submit}>
                    <Input type='text' onChange={change} placeholder='Username' name='username' value={login.username}/>
                    <Input type='password' onChange={change} placeholder='Password' name='password' value={login.password}/>
                    <Button type='submit'>Login</Button>
                </form>
            </Menu.Item>
            
            
        </Menu>
    )}
    else {
        return(
        <Menu fluid widths={3}>
            <Menu.Item >
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/postClass'>Post Class</Link>
            </Menu.Item>
            <Menu.Item>
                <p>{currentUser.message}</p>
            </Menu.Item>
        </Menu>)
    }
}

export default AltNav;