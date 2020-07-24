import React from 'react';
import '../Comp/home.css';

const HomePage = props => {
    return(
    <div>
    {props.posts.map(i => (
        <WorkoutPost key={i.id} session={i}/>
    ))}
    </div>
    )
}

function WorkoutPost({ session }) {
    return(
        <div>
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