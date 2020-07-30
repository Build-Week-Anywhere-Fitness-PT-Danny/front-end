import React, {useState, useEffect} from 'react';
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
        intensity: '',
    }

    const classSchema = yup.object().shape( {
        name: yup.string().required('Name is required'),
        type: yup.string().required('type is required'),
        startTime: yup.string().required('start time is required'),
        duration: yup.string().required('duration is required'),
        location: yup.string().required('location is required'),
        maxClassSize: yup.number().required('Class size is required'),
        intensity: yup.number().required(),
    });

    const [newClass,setNewClass] = useState(defaultClass);
    const [errors, setErrors] = useState([]);
    const [buttonOff, buttonTog] = useState(true);
 
    const validateField = e => {
        e.persist();
        
        yup
          .reach(classSchema, e.target.name)
          .validate(e.target.value)
          .then(valid =>
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          )
          .catch(error => {
            console.log(error, e.target.name);
            setErrors({
              ...errors,
              [e.target.name]: error.errors[0]
            })
          })}

    const change = e => {
        setNewClass({
            ...newClass,
            [e.target.name] : e.target.value}
        );
        validateField(e);
    }

    const submit = e => {
        axios.post(`https://anywhere-fitness-bw-2020.herokuapp.com/api/auth/classes`,newClass)
        .then((res) => {
            console.log('session posted',res); 
        })
        .catch(er => {
            console.log('there was an error',er);
        })
    }

    useEffect(() => {
        classSchema.isValid(newClass).then(valid => buttonTog(!valid));
    }, [newClass]);

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
                <div className='selectbox' onChange={change}>
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
                <button disabled={buttonOff} className='b1' type='submit'>Post Session</button>
            </Form>
        </div>
        
    )
}

export default CreateClass;