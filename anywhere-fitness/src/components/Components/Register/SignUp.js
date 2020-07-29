import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from "yup"
import { Header } from 'semantic-ui-react'

function SignUp() {
    //name
    //username
    //password
    // checkbox for client
    // checkbox for instructor(admin)


    const [values, setValues] = useState({
        fullname: "",
        username: "",
        password: "",
        client: false,
        admin: false,
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleChange = event => {
        const usertype =
          event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setValues({
            ...values, 
            [event.target.name]: usertype
        })
        validateChange(event);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("form submitted!");
        axios
          .post("https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/register", values)
          .then(() => console.log("form submitted success"))
          console.log(values);
    }

    const [errors, setErrors] = useState({
        fullname: "",
        username: "",
        password: "",
        client: false,
        instructor: false,
    })

    const formSchema = Yup.object().shape({
        fullname: Yup
          .string()
          .min(5,"Must include Full Name")
          .required("Must include Full Name"),
        username: Yup
          .string()
          .min(5, "username must be atleast 5 characters long")
          .required("username is required"),
        password: Yup 
            .string()
            .min(5,"Password must be 5-10 characters long")
            .required(),
        client: Yup
          .boolean()
          .optional(),
        instructor: Yup
          .boolean()
      });

      useEffect(() => {
        formSchema.isValid(values).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [values]);

      const validateChange = e => {
        e.persist();
        Yup
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


return (
    <div>
        <form onSubmit={handleSubmit} className="formDiv">
          <h1>Sign Up</h1>
            <label htmlFor="fullname"> First and Last Name: 
                <input
                    type="text"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    error={errors.fullname}
                />
             {errors.fullname.length > 0 ?(<p>{errors.fullname}</p>) : null }
            </label>
        

            <label htmlFor="username"> Username :
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    error={errors.username}
                />
              {errors.username.length > 0 ? (<p>{errors.username}</p>): null }
            </label>

            <label htmlFor="password"> Password :
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                />
            {errors.password.length >0 ? (<p>{errors.password}</p>) :null}
            </label>  
            <label htmlFor="client">
                Client:
                <input 
                type="checkbox" 
                name="client"
                value={values.client}
                onChange={handleChange} />
              </label>
            <label htmlFor="admin"> 
              Instructor: 
              <input 
                type="checkbox" 
                name="admin" 
                value={values.instructor} 
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
)
}

export default SignUp