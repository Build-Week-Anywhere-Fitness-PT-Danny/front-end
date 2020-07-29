import React, { useEffect, useState } from 'react';
import {
  Image,
  Container,
  Form,
  Input,
  Select,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_size.jpg';
import SearchResults from './SearchResults';
import { connect } from 'react-redux';
import { getClasses, addValue } from '../actions/actions';
import './Dashboard.css';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'description', text: 'Description', value: 'description' },
  { key: 'price', text: 'Price', value: 'price' },
];

const Dashboard = ({ addValue }) => {
  // const initialState = { isLoading: false, results: [], value: '' };

  // const [dashboard, setDashboard] = useState({
  //   isLoading: false,
  //   results: [],
  //   values: '',
  // });

  const [selectValue, setSelectValue] = useState();

  const handleSearchChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addValue(selectValue);
  };

  // const handleResultSelect = (e) =>
  //   setInitialState(...initialState, { value: e.title });

  // const handleSearchChange = (e) => {
  //   e.preventDefault();
  //   setDashboard({ ...dashboard, [e.target.name]: e.target.value });

  //   console.log(dashboard);

  //   setTimeout(() => {
  //     if (dashboard.values.length < 1) {
  //       return setDashboard({
  //         isLoading: false,
  //         results: [],
  //         values: '',
  //       });
  //     } else {
  //       const re = new RegExp(_.escapeRegExp(dashboard.values), 'i');
  //       const isMatch = (result) => re.test(result.title);

  //       setDashboard({
  //         ...dashboard,
  //         isLoading: false,
  //         results: _.filter(source, isMatch),
  //       });
  //       // setLoading(false);
  //       // setResults(_.filter(source, isMatch));
  //     }
  //   }, 300);
  // };

  const handleSelectChange = (e) => {};

  const handleResults = (e) => {};

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
          <Form className="search_form" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Search..."
              name="values"
              value={selectValue}
              onChange={handleSearchChange}
              action
            >
              <input />
              <Select
                onChange={handleSelectChange}
                options={options}
                defaultValue="all"
              />
              <Button type="submit">Search</Button>
            </Input>
          </Form>
          <SearchResults />
        </Container>
        <Container className="right_dashboard"></Container>
      </div>
    </div>
  );
};

const mapDispatchToProps = { addValue };

export default connect(null, mapDispatchToProps)(Dashboard);
