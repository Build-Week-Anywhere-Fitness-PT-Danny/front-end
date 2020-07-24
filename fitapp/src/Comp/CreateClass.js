import React, {useState} from 'react';
import './forms.css';
import axios from 'axios';



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

        <div className='container'>
            <h2>Post your class!</h2>
            <form onSubmit={submit}>
                <input type='text' placeholder='Name'name='name' onChange={change} value={newClass.name}/>
                <input type='text' placeholder='Type of workout' name='type' onChange={change} value={newClass.type}/>
                <input type='time' name='startTime' onChange={change} value={newClass.startTime}/>
                <div className='box'>
                    <p>Duration</p>
                    <select name='duration' onChange={change}>
                        <option value='1/2 H'>1/2 H</option>
                        <option value='1 H'>1 H</option>
                        <option value='1 1/2 H'>1 1/2 H</option>
                        <option value='2 H'>2 H</option>
                    </select>
                </div>
                <div className='box'>
                    <p>Intensity</p>
                    <select name='intensity'>
                        <option value='★☆☆☆'>★☆☆☆</option>
                        <option value='★★☆☆'>★★☆☆</option>
                        <option value='★★★☆'>★★★☆</option>
                        <option value='★★★★'>★★★★</option>
                    </select>
                </div>
                <input type='text' placeholder='Location' name='location' onChange={change} value={newClass.location}/>
                <input type='number' placeholder='Max class Size' name='maxClassSize' onChange={change} value={newClass.maxClassSize}/>
                <button type='submit'>Post Session</button>
            </form>
        </div>
    )
}

export default CreateClass;