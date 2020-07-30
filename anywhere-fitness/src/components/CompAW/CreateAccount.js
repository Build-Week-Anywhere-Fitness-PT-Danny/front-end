import React, {useState} from 'react';
import axios from 'axios';
import { Form, Input,Button } from 'semantic-ui-react';
import './createAccount.css';

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
            <div className='box'>
                <Form onSubmit={submit} className='CAform'>
                    <h2>Create Account</h2>
                    <Input type='text' onChange={change} placeholder='Username' name='username' value={newUser.name}/>
                    <Input type='password' onChange={change} placeholder='Password' name='password' value={newUser.password}/>
                    <div className='check'>
                        <Input type='checkbox'/>
                        <p>Resgister as a instructor?</p>
                    </div>
                    <button className='b1' type='submit'>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default CreateAccount;