import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'

function SignUp(props) {
    const defaultState = { 
      name: "",
      username:"",
      password:"",
      client: false,
      admin: false,
    }

const [formState, setFormState] = useState(defaultState);
const [errors, setErrors] = useState({ ...defaultState });
const [buttonDisabled, setButtonDisabled] = useState(true);

let formSchema = yup.object().shape({
    name: yup.string().required().min(2),
    username: yup.string().required().min(2).max(11),
    password: yup.string().required().min(2).max(11),
    client: yup.boolean().oneOf([true]),
    admin: yup.boolean().oneOf([true])
})

useEffect(() => {
    formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
  }, [formState]);


  const validateChange = e => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() =>
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      )
      .catch(error =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0]
        })
      );
  };

  
  const inputChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  };
    
    const handleSubmit = event => {
        event.preventDefault();
        if (formState) {
            props.setTeam([...props.team, {formState}])
        }
        axios
        .post("https://reqres.in/api/auth/register", formState)
        .then(() => console.log("form submitted success"))
        .catch(err => console.log(err));
        console.log(formState);
        event.target.reset(...props.team, {formState});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                id="clientName" 
                type="text" 
                name="name" 
                placeholder="Please Enter Your Name"
                value={formState.name}
                onChange={inputChange}
            />
             <input 
                id="userName" 
                type="text" 
                name="username" 
                placeholder="User Name"
                value={formState.userName}
                onChange={inputChange}
            />
            <input 
                id="password" 
                type="text" 
                name="password" 
                placeholder="Password"
                value={formState.passWord}
                onChange={inputChange}
            />
            <label htmlFor="client"> client
            <input
                type="checkbox"
                name="client"
                onChange={inputChange}
            />
            </label>
            <label htmlFor="client"> instructur
            <input
                type="checkbox"
                name="admin"
                onChange={inputChange}
            />
            </label>
            <label htmlFor="submit">
                <input
                id="submit"
                type="submit"
                name="submit"
                />
            </label>
            </form>
        </div>
    )
}

export default SignUp
