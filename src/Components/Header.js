import React, { Component } from 'react'



class Header extends Component {  
    color = {
        "pink": "lightblue",
        "lightblue": "lightgreen",
        "lightgreen": "beige",
        "beige": "pink"
    }
    state = {
        color: "lightblue"
    }

    clickHandler = () => {
        let color = this.state.color
        let newColor = this.color[color]
        this.setState({color: newColor})
        console.log(this.state)
        
    }
        
    render () {
        return <h1 onClick={this.clickHandler} style={{"background-color": `${this.state.color}`}}>Welcome to Apps</h1>
    }
}


export default Header