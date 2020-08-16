import React, { Component } from 'react'


class Form extends Component {

    state = {
        name: "",
        mod: ""
    }

    formChangeHndler = (e) => {
        let { name, value } = e.target
        this.setState( { [name]: value } )
    }
    render() {
        return (
            <>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.submitHandler(this.state)
                    this.setState({name: "", mod: ""})
                }} >
                    <input type="text" placeholder="enter instructor name" name="name" value={this.state.name} onChange={this.formChangeHndler}/>
                    <input type="number" placeholder="enter mod number" name="mod" value={this.state.mod} onChange={this.formChangeHndler}/>
                    <input type="submit" value="create instructor"/>
                </form>
            </>
        )
    }
}


export default Form