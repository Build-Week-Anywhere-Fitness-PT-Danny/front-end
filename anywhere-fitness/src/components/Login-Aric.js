import React, { useState } from 'react';
import { Image, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import logo from '../assets/logo_size.jpg';
import { addAdmin } from '../actions/actions';
import { connect } from 'react-redux';
import './Login.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/login',
        credentials
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        // localStorage.setItem('admin', res.data.user.admin);
        props.addAdmin(res.data.user.admin);
        console.log(localStorage);
        props.history.push('/protected');
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="page_root">
      <header className="header">
        <Image src={logo}></Image>
      </header>
      <Container className="login_root">
        <div className="login_container">
          <Header as="h2">Login</Header>
          <div className="input_con">
            <form className="login_form" onSubmit={login}>
              <input
                className="login_input"
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
              <input
                className="login_input"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
              <button>Log in</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default connect(null, { addAdmin })(Login);
