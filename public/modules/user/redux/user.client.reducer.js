import UserActionType from '../../user/redux/action-type.client.redux.js'

const key = 'users'

const UserReducer = (state = { user: null, gotUserInfo: false }, action) => {
	switch (action.type) {
		case UserActionType.loginUser:
			return Object.assign({}, state, { user: action.user })
		case UserActionType.logoutUser:
			return Object.assign({}, state, { user: null })
		case UserActionType.getUserInfo:
			return Object.assign({}, state, { user: action.user, gotUserInfo: true })
		default:
			return state
	}
}
export { UserReducer as Reducer, key }
