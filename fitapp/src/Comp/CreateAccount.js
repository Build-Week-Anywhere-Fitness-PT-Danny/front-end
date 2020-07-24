import React, {useState} from 'react';
import '../Comp/forms.css';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

const CreateAccount = props => {

    const user = {
        username: '',
        password: '',
    }

    const [newUser, setNewUser] = useState(user)

    const change = e => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
       setNewUser({
           ...newUser,
           [e.target.name]: value}
       );
    }

    const submit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/register`,newUser)
        .then((res) => {
            console.log('account created');
        })
        .catch(er => {
            console.log('there was an error',er);
        })
    }
    return(
        <div className='container'>
            <h2>Create Account</h2>
            <Form onSubmit={submit} className='form'>
                <input type='text' onChange={change} placeholder='Username' name='username' value={newUser.name}/>
                <input type='password' onChange={change} placeholder='Password' name='password' value={newUser.password}/>
                <div className='box'>
                    <input type='checkbox'/>
                    <p>Resgister as a instructor?</p>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}

export default CreateAccount;