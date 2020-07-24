import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Login() {
    let { register, handleSubmit, errors} = useForm();

    let onSubmit= (data) => {
        console.log(data);
        axios
        .post("https://reqres.in/api/auth/register", data)
        .then(() => console.log("form submitted success"))
        .catch(err => console.log(err));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="username"
                    ref={register({required: true})}
                />
                {errors.username && <p>Username is Required</p>}
                <input
                    type="text"
                    name="password"
                    ref={register({required:true})}
                    />
                {errors.password && <p>Password is Required</p>}
                <Link to="/InstructorApp"><input
                    type="submit"
                /></Link>
            </form>
        </div>
    )
}

export default Login
