import React, { useState } from 'react'
import ClientAvailableWorkouts from './ClientAvailableWorkouts'



function ClientApp() {

    const [savedClass, setSavedClass] = useState([]);
    return (
        <div>
            <ClientAvailableWorkouts  savedClass={savedClass} setSavedClass={setSavedClass}/>
        </div>
    )
}

export default ClientApp
