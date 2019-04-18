import { addUser } from "../actions/userAction"

export const createUser = (user) => {
  return function thunk (dispatch) {
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      headers: {
         'Content-Type': "application/json",
         'Accepts': 'application/json'
      },
     body: JSON.stringify({
    	 user: {
    		 email: user.newUserEmail,
    		 password: user.newUserPassword
    	 }
     })
    })
    .then(resp => resp.json)
    .then(data => dispatch(addUser(data)))

     //localStorage.setItem("token",data.jwt)
  }
}

export const loginUser = (user) => {

 console.log("im the thunk")
}

