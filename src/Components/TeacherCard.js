import React from 'react'
import { NavLink } from 'react-router-dom'


function TeacherCard(props) {
    
    let {id, name} = props.teacher

    let clickHandler = () => {
        return props.AnimeLover ? props.AnimeLover(id) : null
    }
    return (
    <NavLink to={`/instructors/${id}`}>
        <h3 onClick={clickHandler}> hi {name}</h3>
    </NavLink>
    )
}


export default TeacherCard