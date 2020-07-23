import React from 'react';
import { Image, Container, Header } from 'semantic-ui-react';
import logo from '../assets/logo_size.jpg';
import './Login.css';

const Login = () => {
  return (
    <div className="page_root">
      <header className="header">
        <Image src={logo}></Image>
      </header>
      <Container className="login_root">
        <div className="login_container">
          <Header as="h2">Login</Header>
        </div>
      </Container>
    </div>
  );
};

export default Login;
