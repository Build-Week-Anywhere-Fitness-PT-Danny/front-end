import React, {useState} from 'react';
import '../Comp/forms.css';



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
    return(

        //name, type, startTime, duration, intensity, location, numberOfRegisteredAttendees, maxClassSize
        <div className='container'>
            <h2>Post your class!</h2>
            <form>
                <input type='text' placeholder='Name'name='name'/>
                <input type='text' placeholder='Type of workout' name='type'/>
                <input type='time' name='startTime'/>
                <select name='duration'>
                    <option>1/2 H</option>
                    <option>1 H</option>
                    <option>1 1/2 H</option>
                    <option>2 H</option>
                </select>
                <select name='intensity'>
                    <option>★☆☆☆</option>
                    <option>★★☆☆</option>
                    <option>★★★☆</option>
                    <option>★★★★</option>
                </select>
                <input type='text' placeholder='Location' name='location'/>
                <input type='number' placeholder='Max class Size' name='maxClassSize'/>
            
            </form>
        </div>
    )
}

export default CreateClass;