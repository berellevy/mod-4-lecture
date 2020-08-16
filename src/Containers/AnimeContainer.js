import React from 'react'
import Instructor from '../Components/Instructor'


function AnimeContainer(props) {
    let instructors = props.instructors.map(instructorObj=> <Instructor key={instructorObj.id} instructor={instructorObj}/>)
    return (
        <>
            <h1>Anime Container</h1>
            {instructors}
        </>
    ) 
}


export default AnimeContainer