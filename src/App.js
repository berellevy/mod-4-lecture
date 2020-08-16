import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer'
import {Route, Switch, withRouter} from 'react-router-dom'
import Welcome from './Components/Welcome';
import Search from './Components/Search';
import fetcher from "./fetcher";
import Navbar from './Components/NavBar';
let api = "http://localhost:3000/instructors"




class App extends Component {
  state = {
    names: [],
    searchValue: ""
  }

  componentDidMount() {
    fetcher(api, this.inStateInstructors)
  }

  inStateInstructors = (data) => {
    this.setState({ names: data})
  }

  searchHandler = (e) => {
    let { value } = e.target
    this.setState({ searchValue: value})
  }

  appClickHandler = () => {
    console.log("%c In App!", "color: red");
  }

 submitHandler = (obj) => {
   fetcher(api, this.addNewInstructor, {method: "POST", body: obj})
 }
 
 addNewInstructor = (obj) => {
  this.setState({ names: [...this.state.names, obj]})
  this.props.history.push(`/instructors/${obj.id}`)
 } 

 filteredInstructors = () => {
   let { names, searchValue } = this.state
   console.log(names);
   if (searchValue) {
    return names.filter(instructor => instructor.name.toLowerCase().includes(searchValue.toLowerCase()))
   } else {
    return names
   }
 }
  
  
  render() {
    let { names, searchValue } = this.state
    return (
        
      <div> 
          {names.length === 0 ? <h1>LOADING INSTRUCTORS</h1> :
          <>  
              <Navbar/>
              <Header /> 
              <Switch>
                  <Route 
                    path="/welcome"
                    component={Welcome}
                  />

                  <Route path="/anime" render={() => (
                    <AnimeContainer instructors={this.filteredInstructors()}/> 
                  )} />
                  
                  <Route path="/instructors" render={() => (
                      <InstructorContainer 
                          appClickHandler={this.appClickHandler} 
                          instructors={this.filteredInstructors()} 
                          submitHandler={this.submitHandler}
                          searchHandler={this.searchHandler}
                          searchValue={searchValue}
                      />
                  )}/>
              </Switch>
          </>
            }
        </div>
            
    );

  }
}

export default withRouter(App);
