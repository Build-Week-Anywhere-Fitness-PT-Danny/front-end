import React,{ useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
import CreateWorkout from './CreateWorkout'

function InstructorApp() {
    const [savedClass, setSavedClass] = useState([]);
    return (
        <Router>
             <div>
                <Link to="/CreateWorkout">Create A Workout Class</Link>
                <Route to="/CreateWorkout"><CreateWorkout savedClass={savedClass} setSavedClass={setSavedClass} /></Route>
            </div>
        </Router>
    )
}

export default InstructorApp
