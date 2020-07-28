import React, { Component } from 'react';
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
  { key: 'name', text: 'Name', value: 'name' },
  { key: 'type', text: 'Type', value: 'type' },
  { key: 'time', text: 'Time', value: 'time' },
  { key: 'duration', text: 'Duration', value: 'duration' },
  { key: 'intensity', text: 'Intensity', value: 'intensity' },
  { key: 'location', text: 'Location', value: 'location' },
];

const source = [
  {
    name: 'Yoga',
    type: 'stretching',
    startTime: '2:00pm',
    duration: '1 hour',
    intensity: 'easy',
    location: 'park',
    numberOfRegisteredAttendees: 7,
    maxClassSize: 12,
  },
  {
    name: 'Pilates',
    type: 'cardio',
    startTime: '1:00pm',
    duration: '1 hour',
    intensity: 'medium',
    location: 'mall',
    numberOfRegisteredAttendees: 11,
    maxClassSize: 20,
  },
  {
    name: 'Jogging',
    type: 'cardio',
    startTime: '3:00pm',
    duration: '2 hour',
    intensity: 'medium',
    location: 'beach',
    numberOfRegisteredAttendees: 7,
    maxClassSize: 12,
  },
  {
    name: 'Pilates',
    type: 'cardio',
    startTime: '1:00pm',
    duration: '1 hour',
    intensity: 'medium',
    location: 'mall',
    numberOfRegisteredAttendees: 11,
    maxClassSize: 20,
  },
  {
    name: 'Yoga',
    type: 'stretching',
    startTime: '2:00pm',
    duration: '1 hour',
    intensity: 'easy',
    location: 'park',
    numberOfRegisteredAttendees: 7,
    maxClassSize: 12,
  },
  {
    name: 'Pilates',
    type: 'cardio',
    startTime: '1:00pm',
    duration: '1 hour',
    intensity: 'medium',
    location: 'mall',
    numberOfRegisteredAttendees: 11,
    maxClassSize: 20,
  },
];

const initialState = { isLoading: false, results: [], value: '' };
const user = localStorage.getItem('admin');

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      initialState: {
        isLoading: false,
        results: [],
        value: '',
      },
      selectValue: 'all',
    };
  }
  handleResultSelect = (e, { result }) => this.setState({ value: result.name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  };

  handleSelectChange = (e) => {};

  handleResults = (e) => {};

  render() {
    const { isLoading, value, results } = this.state;
    {
      console.log(user);
    }
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
            {/* <Search
              fluid
              icon="search"
              className="dashboard_search"
              placeholder="Search..."
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
            ></Search>
            <SearchResults returnResults={this.returnResults} /> */}
            <Form className="search_form">
              <Input
                type="text"
                placeholder="Search..."
                onChange={this.handleSearchChange}
                action
              >
                <input />
                <Select
                  onChange={this.handleSelectChange}
                  options={options}
                  defaultValue="all"
                />
                <Button type="submit">Search</Button>
              </Input>
            </Form>
            <SearchResults results={results} />
          </Container>
          <Container className="right_dashboard"></Container>
        </div>
      </div>
    );
  }
}
