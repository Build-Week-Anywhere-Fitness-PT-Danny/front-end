import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';

const SignUp = () => {
  //name
  //username
  //password
  // checkbox for client
  // checkbox for instructor(admin)

  const [values, setValues] = useState({
    fullname: '',
    username: '',
    password: '',
    admin: false,
  });

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
      .post('https://reqres.in/api/users', values)
      .then(() => console.log('form submitted success'));
    console.log(values);
  };

  const [errors, setErrors] = useState({
    fullname: '',
    username: '',
    password: '',
    admin: false,
  });

  const formSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(5, 'Must include Full Name')
      .required('Must include Full Name'),
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
      <form onSubmit={handleSubmit} className="formDiv">
        <h1>Register</h1>
        <label htmlFor="fullname">
          {' '}
          First and Last Name:
          <input
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            error={errors.fullname}
            style={{ width: '300px' }}
          />
          {errors.fullname.length > 0 ? <p>{errors.fullname}</p> : null}
        </label>

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
        />
      </form>
    </div>
  );
};

export default SignUp;
