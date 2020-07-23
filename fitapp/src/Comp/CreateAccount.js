import React from 'react';
import '../Comp/cards.css';

const CreateAccount = props => {



    const change = e => {
       console.log('hi');
    }
    return(
        <div className='container'>
            <h2>Create Account</h2>
            <form>
            <input type='text' onChange={change} placeholder='name' name='name' />
            <input type='text' onChange={change} placeholder='email' name='email' />
            <input type='text' onChange={change} placeholder='Username' name='username' />
            <input type='password' onChange={change} placeholder='Password' name='password' />
            <input type='password' onChange={change} placeholder='Verify Password' name='password2' />
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateAccount;