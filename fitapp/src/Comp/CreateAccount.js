import React, {useState} from 'react';
import '../Comp/forms.css';

const CreateAccount = props => {

    const user = {
        name: '',
        email: '',
        username: '',
        password: '',
    }

    const [newUser, setNewUser] = useState(user)

    const change = e => {
       setNewUser({
           ...newUser,
           [e.target.name]: e.target.value}
       );
    }

    const submit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/login`,newUser)
        .then((res) => {
            console.log('user logged in',res); 
        })
        .catch(er => {
            console.log('there was an error',er);
        })
    }
    return(
        <div className='container'>
            <h2>Create Account</h2>
            <form>
            <input type='text' onChange={change} placeholder='name' name='name' value={newUser.name} />
            <input type='text' onChange={change} placeholder='email' name='email' value={newUser.email}/>
            <input type='text' onChange={change} placeholder='Username' name='username' value={newUser.name}/>
            <input type='password' onChange={change} placeholder='Password' name='password' value={newUser.password}/>
            <input type='password' onChange={change} placeholder='Verify Password' name='passverfy' value={newUser.passverfy} />
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateAccount;