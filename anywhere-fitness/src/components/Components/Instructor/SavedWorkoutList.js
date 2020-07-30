import React from 'react'


function SavedWorkoutList(props) {

    return (
        <div>
            <div className="savedClassDiv">
            {props.savedClass.map(data => (
                <div className="aboutText">
                <h2>{data.createClass.name}</h2>
                <p>{data.createClass.type}</p>
                <p>{data.createClass.StartTime}</p>
                <p>{data.createClass.duration}</p>
                <p>{data.createClass.intensity}</p>
                <p>{data.createClass.location}</p>
                <p>{data.createClass.numberOfRegisteredAttendess}</p>
                <p>{data.createClass.maxClassSize}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default SavedWorkoutList

