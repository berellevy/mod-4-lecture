import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer'
import {Route, Switch} from 'react-router-dom'
import Welcome from './Components/Welcome';



class App extends Component {
  state = {
    names: [
      {id: 1, name: "Berel", AnimeLoves: false},
      {id: 2, name: "Corey", AnimeLoves: false},
      {id: 3, name: "Liam", AnimeLoves: false}
    ]

  }

  // AnimeLover = (id) => {
  //   console.log("animeLover", " id: ", id)
  // }
  
  
  render() {
    return (
        <div> 
            <Header /> 
            <Switch>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/instructors/anime" render={() => <AnimeContainer teachers={this.state.names}/> } />
                <Route path="/instructors" render={() => <InstructorContainer AnimeLover={this.AnimeLover} teachers={this.state.names}/>}/>
            </Switch>
            
        </div>
    );

  }
}

export default App;
