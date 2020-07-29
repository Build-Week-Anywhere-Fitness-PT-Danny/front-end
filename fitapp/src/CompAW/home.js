import React from 'react';
import './home.css';
import { Card } from 'semantic-ui-react';


const HomePage = props => {
    return(
    <Card.Group className='bod'>
    {props.posts.map(i => (
        <WorkoutPost key={i.id} session={i}/>
    ))}
    </Card.Group >
    )
}

function WorkoutPost({ session }) {
    return(
        <div className='card'>
            <div className='top'>
                <h3>{session.name}</h3>
                <p className={session.intensity}>{session.intensity}</p>
            </div>
            <div>
                <p>Type: {session.type}</p>
                <p>Location: {session.location}</p>
                <p>spots: {session.numberOfRegisteredAttendees}/{session.maxClassSize}</p>
                <p>Start: {session.startTime}</p>
                <p>Duration: {session.duration}</p>
            </div>
        </div>
    );
}

 

export default HomePage;