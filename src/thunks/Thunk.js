

export const createUser = () => {
  return function thunk (dispatch) {
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      headers: {
         'Content-Type': "application/json",
         'Accepts': 'application/json'
      },

      body: JSON.stringify(user)
      })
     .then(resp => resp.json)
     .then(data => dispatch(addUser(user)))
     .catch(console.error)
   }
  }
