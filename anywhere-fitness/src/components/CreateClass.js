import React, { useState, useEffect } from 'react';
import { Image, Container, Form, Input, Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo_size.jpg';
import { connect } from 'react-redux';
import { addValue, addSelect, getClasses } from '../actions/actions';
import './createClass.css';
import * as yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const options = [
  { key: 'name', text: 'Name', value: 'name' },
  { key: 'type', text: 'Type', value: 'type' },
  { key: 'time', text: 'Time', value: 'time' },
  { key: 'duration', text: 'Duration', value: 'duration' },
  { key: 'intensity', text: 'Intensity', value: 'intensity' },
  { key: 'location', text: 'Location', value: 'location' },
];

const CreateClass = ({
  addValue,
  getClasses,
  addSelect,
  admin,
  joinedClass_array,
}) => {
  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push('/login');
  };

  const handleDashboard = (e) => {
    e.preventDefault();
    history.push('/protected');
  };

  // OLD
  // NEW

  const defaultClass = {
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensity: '',
    location: '',
    numberOfRegisteredAttendees: '',
    maxClassSize: '',
  };

  const classSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    type: yup.string().required('type is required'),
    startTime: yup.string().required('start time is required'),
    duration: yup.string().required('duration is required'),
    intensity: yup.number().required(),
    location: yup.string().required('location is required'),
    maxClassSize: yup.number().required('Class size is required'),
  });

  const [newClass, setNewClass] = useState(defaultClass);
  const [errors, setErrors] = useState([]);
  const [buttonOff, buttonTog] = useState(true);

  const validateField = (e) => {
    e.persist();

    yup
      .reach(classSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) =>
        setErrors({
          ...errors,
          [e.target.name]: '',
        })
      )
      .catch((error) => {
        console.log(error, e.target.name);
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        });
      });
  };

  const change = (e) => {
    e.preventDefault();
    setNewClass({
      ...newClass,
      [e.target.name]: e.target.value,
    });
    validateField(e);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(newClass);
    axiosWithAuth()
      .post(`/classes`, newClass)
      .then((res) => {
        console.log('session posted', res);
        alert('Class created!');
      })
      .catch((er) => {
        console.log('there was an error', er.response.statusText);
      });
  };

  useEffect(() => {
    classSchema.isValid(newClass).then((valid) => buttonTog(!valid));
  }, [newClass]);

  function LoggedAdmin(props) {
    return (
      <Button
        className="class_button"
        onClick={handleDashboard}
        animated="fade"
      >
        <Button.Content visible>Dashboard</Button.Content>
        <Button.Content hidden>
          <Icon name="plus" />
        </Button.Content>{' '}
      </Button>
    );
  }

  return (
    <div className="page_root">
      <header className="dashboard_header">
        <Image src={logo}></Image>
        <div className="header_buttons">
          {admin ? <LoggedAdmin /> : <div></div>}
          <Button className="logout_button cart" animated="vertical">
            <Button.Content hidden>Cart</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
              <span className="cart_span">{joinedClass_array.length}</span>
            </Button.Content>
          </Button>
          <Button className="logout_button" onClick={handleLogout} animated>
            <Button.Content visible>Logout</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </header>
      <div className="class_dashboard_root">
        <Container className="class_left_dashboard">
          <Form onSubmit={submit} className="CCform">
            <h2>Post your class!</h2>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={change}
              value={newClass.name}
            />
            <Input
              type="text"
              placeholder="Type of workout"
              name="type"
              onChange={change}
              value={newClass.type}
            />
            <Input
              type="time"
              name="startTime"
              onChange={change}
              value={newClass.startTime}
            />
            <div className="selectbox">
              <p>Duration</p>
              <select name="duration" onChange={change}>
                <option value="1/2 hour">1/2 hour</option>
                <option value="1 hour">1 hour</option>
                <option value="1 1/2 hour">1 1/2 hour</option>
                <option value="2 hour">2 hour</option>
              </select>
            </div>
            <div className="selectbox" onChange={change}>
              <p>Intensity</p>
              <select name="intensity">
                <option value={1}>★☆☆☆</option>
                <option value={2}>★★☆☆</option>
                <option value={3}>★★★☆</option>
                <option value={4}>★★★★</option>
              </select>
            </div>
            <Input
              type="text"
              placeholder="Location"
              name="location"
              onChange={change}
              value={newClass.location}
            />
            <Input
              type="number"
              placeholder="Max class Size"
              name="maxClassSize"
              onChange={change}
              value={newClass.maxClassSize}
            />
            <button disabled={buttonOff} className="b1" type="submit">
              Post Class
            </button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joinedClass_array: state.joinedClass_array,
    admin: state.admin,
    results: state.results,
    newResults: state.newResults,
    value: state.value,
  };
};

const mapDispatchToProps = { addValue, getClasses, addSelect };

export default connect(mapStateToProps, mapDispatchToProps)(CreateClass);
