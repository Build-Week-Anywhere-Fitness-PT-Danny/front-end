import React, { useState, useEffect } from 'react';
import { Image, Container, Header } from 'semantic-ui-react';
import logo from '../assets/logo_size.jpg';
import './Login.css';
import axios from 'axios';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    admin: false,
  });

  const history = useHistory();

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (event) => {
    const usertype =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setValues({
      ...values,
      [event.target.name]: usertype,
    });
    validateChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted!');
    axios
      .post(
        'https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/register',
        values
      )
      .then(() => {
        console.log('form submitted success');
        history.push('/login');
      });
    console.log(values);
  };

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    admin: false,
  });

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'username must be atleast 5 characters long')
      .required('username is required'),
    password: Yup.string()
      .min(5, 'Password must be 5-10 characters long')
      .required(),
    admin: Yup.boolean(),
  });

  useEffect(() => {
    formSchema.isValid(values).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [values]);

  const validateChange = (e) => {
    e.persist();
    Yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() =>
        setErrors({
          ...errors,
          [e.target.name]: '',
        })
      )
      .catch((error) =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        })
      );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="formDiv"
        style={{ opacity: '100%' }}
      >
        <h1>Register</h1>

        <label htmlFor="username">
          {' '}
          Username :
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={errors.username}
            style={{ width: '300px' }}
          />
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
        </label>

        <label htmlFor="password">
          {' '}
          Password :
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            style={{ width: '300px' }}
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </label>
        <label htmlFor="admin">
          Instructor:
          <input
            type="checkbox"
            name="admin"
            value={values.admin}
            onChange={handleChange}
          />
        </label>

        <input
          disabled={buttonDisabled}
          id="submit"
          type="submit"
          name="submit"
          className="submitBtn"
          style={{ width: '300px', marginBottom: '50px' }}
        />
      </form>
    </div>
  );
};

export default Register;
