import React from 'react'
import { Menu } from 'semantic-ui-react'

import {Route, Link} from 'react-router-dom'

function NavBar() {

    
    return (
        <Menu>
            <Menu.Item>
                <Link to ="/">Home</Link>
            </Menu.Item>

            <Menu.Item>
                <Route path="/InstructorApp"></Route>
                <Link to="/InstructorApp">Instructor</Link>
            </Menu.Item>

            <Menu.Item>
                <Link to="/ClientApp">Search Classes</Link>
            </Menu.Item>

        
        </Menu>
    )
}

export default NavBar


{/* <Link to="/InstructorApp">Create Workout</Link>
<Route path="/ClientApp"><ClientApp /></Route>
<Link to="/ClientApp">Search Classes</Link>  */}