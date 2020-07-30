import React, {useState} from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'semantic-ui-react';
import '../CompAW/createClass.css';
import * as yup from 'yup';



const CreateClass = props => {
    const defaultClass = {
        name: '',
        type: '',
        startTime: '',
        duration: '',
        location: '',
        maxClassSize: '',
    }
    const [newClass,setNewClass] = useState(defaultClass);
    const change = e => {
        setNewClass({
            ...newClass,
            [e.target.name] : e.target.value}
        );
    }

    const submit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/classes`,newClass)
        .then((res) => {
            console.log('session posted'); 
        })
        .catch(er => {
            console.log('there was an error',er);
        })
    }

    return(
        
        <div className='CCcontainer'>
            
            <Form onSubmit={submit} className='CCform'>
                <h2>Post your class!</h2>
                <Input type='text' placeholder='Name'name='name' onChange={change} value={newClass.name}/>
                <Input type='text' placeholder='Type of workout' name='type' onChange={change} value={newClass.type}/>
                <Input type='time' name='startTime' onChange={change} value={newClass.startTime}/>
                <div className='selectbox'>
                    <p>Duration</p>
                    <select name='duration' onChange={change}>
                        <option value='1/2 H'>1/2 H</option>
                        <option value='1 H'>1 H</option>
                        <option value='1 1/2 H'>1 1/2 H</option>
                        <option value='2 H'>2 H</option>
                    </select>
                </div>
                <div className='selectbox'>
                    <p>Intensity</p>
                    <select name='intensity'>
                        <option value='1'>★☆☆☆</option>
                        <option value='2'>★★☆☆</option>
                        <option value='3'>★★★☆</option>
                        <option value='4'>★★★★</option>
                    </select>
                </div>
                <Input type='text' placeholder='Location' name='location' onChange={change} value={newClass.location}/>
                <Input type='number' placeholder='Max class Size' name='maxClassSize' onChange={change} value={newClass.maxClassSize}/>
                <button className='b1' type='submit'>Post Session</button>
            </Form>
        </div>
        
    )
}

export default CreateClass;