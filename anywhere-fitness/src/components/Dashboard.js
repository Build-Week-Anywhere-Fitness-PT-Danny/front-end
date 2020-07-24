import React from 'react';
import {
  Image,
  Container,
  Header,
  Search,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_size.jpg';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="page_root">
      <header className="dashboard_header">
        <Image src={logo}></Image>
        <div className="header_buttons">
          <Button className="class_button" animated="fade">
            <Button.Content visible>Create a Class</Button.Content>
            <Button.Content hidden>
              <Icon name="plus" />
            </Button.Content>
          </Button>
          <Button as={Link} to="/" className="logout_button" animated>
            <Button.Content visible>Logout</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </header>
      <div className="dashboard_root">
        <Container className="left_dashboard">
          <Search
            fluid
            icon="search"
            className="dashboard_search"
            placeholder="Search..."
          ></Search>
        </Container>
        <Container className="right_dashboard"></Container>
      </div>
    </div>
  );
};

export default Dashboard;
