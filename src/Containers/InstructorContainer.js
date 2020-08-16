import React, { Component } from 'react'
import Instructor from '../Components/Instructor'
import {Route, Switch} from 'react-router-dom'
import Form from '../Components/Form'
import Search from '../Components/Search'

class InstructorContainer extends Component {
   
    render() {
        let { instructors, appClickHandler, submitHandler, searchHandler, searchValue } = this.props

        let instructorCards = instructors.map(instructorObj => (
            <Instructor 
                key={instructorObj.id} 
                instructor={instructorObj} 
                appClickHandler={appClickHandler}
            />
        ))

        return (
            <>
                <Switch>
                    <Route path="/instructors/create" render={() => <Form submitHandler={submitHandler}/> } />
                    <Route exact path="/instructors/:id" render={ ({match}) => {
                        let id = parseInt(match.params.id)
                        let instructor = instructors.find(instructor => instructor.id === id)
                        return <Instructor instructor={instructor}/> 
                    } } />
                    <Route exact path="/instructors">
                        <>
                            <h1>Instructors</h1>
                            <Search searchHandler={searchHandler} searchValue={searchValue}/>
                            {instructorCards} 
                        </>
                    </Route>
                </Switch>
            </>
        ) 
    }

}

export default InstructorContainer