import React from 'react'
import TeacherCard from '../Components/TeacherCard'
import {Route} from 'react-router-dom'

function InstructorContainer({teachers, AnimeLover}) {

    return (
        <>

            <Route exact path="/instructors/:id" render={ ({match}) => {
                let id = parseInt(match.params.id)
                let teacher = teachers.find(teacher => teacher.id === id)
                return <TeacherCard teacher={teacher}/> 
            } } />


{/* 
            <h1>Instructors</h1>
            {teacherCards} */}
        </>
    ) 
}


export default InstructorContainer