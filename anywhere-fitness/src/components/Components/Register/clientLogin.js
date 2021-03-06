import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Login() {
    let { register, handleSubmit, errors} = useForm();

    let onSubmit= (data) => {
        console.log(data);
        axios
        .post("https://reqres.in/api/users", data)
        .then(() => console.log("form submitted success"))
        .catch(err => console.log(err));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
                <input
                    placeholder="Username"
                    type="text"
                    name="username"
                    ref={register({required: true})}
                />
                {errors.username && <p>Username is Required</p>}
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    ref={register({required:true})}
                    />
                {errors.password && <p>Password is Required</p>}
                <input
                    type="submit"
                    className="submitBtn"
                />
            </form>
        </div>
    )
}

export default Login