import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/userAction';

class RegistrationForm extends React.Component {

  state = {
  	newUserEmail: "",
  	newUserPassword: "",
  }

  handleChange = (e) => {
  	this.setState({
  		[e.target.name]: e.target.value
  	})

  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	const user = this.state
  	//console.log(user)
  	this.props.createUser(user)
  }


	render(){
		//console.log(this.props)
     return (
        <div>
     	    <form onSubmit= {this.handleSubmit}>
     	      <input
		     	    type="text"
		     	    name= "newUserEmail"
		     	    placeholder = "email"
		     	    onChange = {this.handleChange}
     	      />

           <input
		     	   type="text"
		     	   name= "newUserPassword"
		     	   placeholder = "password"
		     	   onChange = {this.handleChange}
     	     />
           <button> Sign up </button>
        </form>
      </div>
     	)
	}
}

const mapDispatchToProps = (dispatch) => {
console.log("inmapdispatch")
  return {
	   addUser: (userObj) => dispatch(createUser(userObj))
  }
}


export default connect(null, mapDispatchToProps)(RegistrationForm);
