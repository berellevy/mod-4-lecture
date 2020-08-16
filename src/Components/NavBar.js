import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <ul>
            <NavLink to="/welcome">
                <li>Welcome</li>
            </NavLink>
            <NavLink to="/instructors">
                <li>All instructors</li>
            </NavLink>
            <NavLink to="/anime">
                <li>Anime</li>
            </NavLink>
            <NavLink to="/instructors/create">
                <li>Add Instructors</li>
            </NavLink>
        </ul>
    )
}


export default Navbar