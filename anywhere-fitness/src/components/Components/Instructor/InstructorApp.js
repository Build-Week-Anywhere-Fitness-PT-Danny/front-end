import React,{ useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route } from 'react-router-dom'
import CreateWorkout from './CreateWorkout'
import SavedWorkoutList from './SavedWorkoutList'

function InstructorApp() {
    const [savedClass, setSavedClass] = useState([]);

  
    return (
        <Router>
             <div>
                <Route to="/CreateWorkout"><CreateWorkout savedClass={savedClass} setSavedClass={setSavedClass} /></Route>
                <SavedWorkoutList savedClass={savedClass} />
            </div>
        </Router>
    )
}

export default InstructorApp