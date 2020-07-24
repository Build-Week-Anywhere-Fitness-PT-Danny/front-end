import React from 'react'


function SavedWorkoutList(props) {


    return (
        <div>
        <div className='member-div'>
            {props.savedClass.map((data) => (
                <div className="members">
                    <h2>{data.createClass.name}</h2>
                    <h3>{data.createClass.type}</h3>
                    <h3>{data.createClass.startTime}</h3>
                    <h3>{data.createClass.duration}</h3>
                    <h3>{data.createClass.intensity}</h3>
                    <h3>{data.createClass.location}</h3>
                    <h3>{data.createClass.maxClassSize}</h3>
                </div>
            ))}
        </div>
    </div>
    )
}

export default SavedWorkoutList

//Make Workouts Removable