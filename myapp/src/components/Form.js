import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:null,
      email:null

    }
  }
  changeHandler=(e)=> {
    e.preventDefault();
    console.log(this.state.name)
    const name = e.target.username.value
    const email = e.target.email.value

    this.setState({name,email},()=>{
      // e.target.username.value = "";
    console.log(this.state.name)

    })
  }
  render() {
    return (
      <>
        <form className='text-center' onSubmit={this.changeHandler}>
          <input type="text" name='username' placeholder="Enter your Name" />
          <input type="text" name='email' placeholder="Enter your Eamil" />

          <button type="submit">Submit</button>
        </form>
        <h1 className='text-center'>{this.state.name}</h1>
        <h1 className='text-center'>{this.state.email}</h1>

      </>
    )
  }
}


export default Form