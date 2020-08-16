import React from 'react'
import { NavLink } from 'react-router-dom'


function Instructor({ instructor, appClickHandler }) {
    let {id, name} = instructor


    return (
        <NavLink to={`/instructors/${id}`}>
            <p onClick={appClickHandler}> hi {name}</p>
        </NavLink>
    )
}


export default Instructor