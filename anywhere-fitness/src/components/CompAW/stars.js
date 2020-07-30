import React from 'react';
import './stars.css'
// ★☆☆☆
// ★★☆☆
// ★★★☆
// ★★★★
const Stars = props => {
    if( props.int == 1){
        return (
            <div>
                <p className='intp'>Intensity</p>
                <p >★☆☆☆</p>
            </div>
        )
    }
    else if( props.int == 2){
        return (
            <div>
                <p className='intp'>Intensity</p>
                <p>★★☆☆</p>
            </div>
        )
    }
    else if( props.int == 3){
        return (
            <div>
                <p className='intp'>Intensity</p>
                <p>★★★☆</p>
            </div>
        )
    }
    else if( props.int == 4){
        return (
            <div>
                <p className='intp'>Intensity</p>
                <p>★★★★</p>
            </div>
        )
    }
    else {
        return(<p>.</p>)
    }
    
}


export default Stars;