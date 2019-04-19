
export const addUser = (user) => {
	return {
		type: "ADD_USER",
    payload: user
	}
}

export const getUser = (user) => {
	return {
		type: "GET_USER",
    payload: user
	}
}

export const logoutUser = (user) => {
	return {
		type: "LOGOUT_USER",
		payload: user
	}
}
