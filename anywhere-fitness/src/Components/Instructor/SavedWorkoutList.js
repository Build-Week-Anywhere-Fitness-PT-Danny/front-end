import React, { useState } from 'react'
import CreateWorkout from './CreateWorkout'

function SavedWorkoutList() {
    const [savedClass, setSavedClass] = useState([]);

    return (
        <div>
            <CreateWorkout savedClass={savedClass} setSavedClass={setSavedClass}/>
        </div>
    )
}

export default SavedWorkoutList
