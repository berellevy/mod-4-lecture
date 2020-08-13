import React from 'react'
import TeacherCard from '../Components/TeacherCard'


function AnimeContainer(props) {
    let teachers = props.teachers.map(t=> <TeacherCard key={t.id} teacher={t}/>)
    return (
        <>
            <h1>Animeys</h1>
            {teachers}
        </>
    ) 
}


export default AnimeContainer