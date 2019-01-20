import users from './../../Utility/users.json';

const initialState = {
	users : users
}

const loginReducer = (state = initialState , action) => {
	switch (action.type) {
		default:
			return [
				...users
			]
	}
}

export default loginReducer
