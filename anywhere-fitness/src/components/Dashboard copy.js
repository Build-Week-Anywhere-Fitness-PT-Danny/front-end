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
import _ from 'lodash';
import logo from '../assets/logo_size.jpg';
import SearchResults from './SearchResults';
import './Dashboard.css';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'description', text: 'Description', value: 'description' },
  { key: 'price', text: 'Price', value: 'price' },
];

const source = [
  {
    title: 'Brakus Inc',
    description: 'Universal upward-trending artificial intelligence',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonsgotwood/128.jpg',
    price: '$71.15',
  },
  {
    title: 'Schumm Group',
    description: 'Horizontal global hardware',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg',
    price: '$40.76',
  },
  {
    title: 'Donnelly, Reilly and Wisozk',
    description: 'Function-based real-time model',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/_scottburgess/128.jpg',
    price: '$17.59',
  },
  {
    title: 'Dach, Runte and Pacocha',
    description: 'Function-based analyzing attitude',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nfedoroff/128.jpg',
    price: '$94.21',
  },
  {
    title: 'Kutch LLC',
    description: 'Reduced impactful architecture',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/jeffgolenski/128.jpg',
    price: '$42.39',
  },
  {
    title: 'Brakus Inc',
    description: 'Universal upward-trending artificial intelligence',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonsgotwood/128.jpg',
    price: '$71.15',
  },
  {
    title: 'Schumm Group',
    description: 'Horizontal global hardware',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg',
    price: '$40.76',
  },
  {
    title: 'Donnelly, Reilly and Wisozk',
    description: 'Function-based real-time model',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/_scottburgess/128.jpg',
    price: '$17.59',
  },
  {
    title: 'Dach, Runte and Pacocha',
    description: 'Function-based analyzing attitude',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nfedoroff/128.jpg',
    price: '$94.21',
  },
  {
    title: 'Kutch LLC',
    description: 'Reduced impactful architecture',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/jeffgolenski/128.jpg',
    price: '$42.39',
  },
  {
    title: 'Brakus Inc',
    description: 'Universal upward-trending artificial intelligence',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonsgotwood/128.jpg',
    price: '$71.15',
  },
  {
    title: 'Schumm Group',
    description: 'Horizontal global hardware',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg',
    price: '$40.76',
  },
  {
    title: 'Donnelly, Reilly and Wisozk',
    description: 'Function-based real-time model',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/_scottburgess/128.jpg',
    price: '$17.59',
  },
  {
    title: 'Dach, Runte and Pacocha',
    description: 'Function-based analyzing attitude',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nfedoroff/128.jpg',
    price: '$94.21',
  },
  {
    title: 'Kutch LLC',
    description: 'Reduced impactful architecture',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/jeffgolenski/128.jpg',
    price: '$42.39',
  },
];

const Dashboard = () => {
  // const initialState = { isLoading: false, results: [], value: '' };

  const [dashboard, setDashboard] = useState({
    isLoading: false,
    results: [],
    values: '',
  });
  // const [results, setResults] = useState([]);
  // const [values, setValues] = useState();

  // const handleResultSelect = (e) =>
  //   setInitialState(...initialState, { value: e.title });

  const handleSearchChange = (e, { value }) => {
    setDashboard({ ...dashboard, [e.target.name]: e.target.value });

    console.log(dashboard);

    setTimeout(() => {
      if (dashboard.values.length < 1) {
        return setDashboard({
          isLoading: false,
          results: [],
          values: '',
        });
      } else {
        const re = new RegExp(_.escapeRegExp(dashboard.values), 'i');
        const isMatch = (result) => re.test(result.title);

        setDashboard({
          ...dashboard,
          isLoading: false,
          results: _.filter(source, isMatch),
        });
        // setLoading(false);
        // setResults(_.filter(source, isMatch));
      }
    }, 300);
  };

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
          <Form className="search_form">
            <Input
              type="text"
              placeholder="Search..."
              name="values"
              value={dashboard.values}
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
          <SearchResults results={dashboard.results} />
        </Container>
        <Container className="right_dashboard"></Container>
      </div>
    </div>
  );
};

export default Dashboard;
