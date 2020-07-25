import React from 'react'
import SwipeToDelete from 'react-swipe-to-delete-component';


function SavedWorkoutList(props) {

    return (
        <div>
            
        <div className='workoutCard'>
            {props.savedClass.map((data) => (
                <div className="workoutCard">
                    <h2>{data.createClass.name}</h2>
                    <h3>{data.createClass.type}</h3>
                    <h3>{data.createClass.startTime}</h3>
                    <h3>{data.createClass.duration}</h3>
                    <h3>{data.createClass.intensity}</h3>
                    <h3>{data.createClass.location}</h3>
                    <h3>{data.createClass.numberOfRegisteredAttendees}</h3>
                    <h3>{data.createClass.maxClassSize}</h3>
                </div>
            ))}

        </div>
    </div>
    )
}

export default SavedWorkoutList

//Make Workouts Removable