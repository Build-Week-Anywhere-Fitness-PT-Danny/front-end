import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from "yup";

function SignUp(props) {
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
          .post("https://reqres.in/api/auth/register", values)
          .then(() => console.log("form submitted success"))
          .catch(err => console.log(err));
          console.log(values)
    }

    const [errors, setErrors] = useState({
        fullname: "",
        username: "",
        password: "",
        client: false,
        admin: false,
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
          .oneOf([true], "User Type is required"),
        admin: Yup
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname"> First and Last Name: 
                <input
                    type="text"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    error={errors.fullname}
                />
             {errors.fullname.length > 5 ?(<p className="error">{errors.fullname}</p>) : null }
            </label>
        

            <label htmlFor="username"> Username :
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="password"> Password :
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </label>  
            <label htmlFor="select">
                Client:
                <input 
                id="checkbox"
                type="checkbox" 
                name="client"
                value={values.admin}
                onChange={handleChange} />
                instructor:
            <input 
                id="checkbox"
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
            />

        </form>
    </div>
)
}

export default SignUp