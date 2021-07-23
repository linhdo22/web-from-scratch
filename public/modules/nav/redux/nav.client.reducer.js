import NavActionType from '../../nav/redux/action-type.client.redux.js'

const key = 'nav'

// Reducer
const HeaderReducer = (
	state = { menu: false, isHiddenMenu: false },
	action
) => {
	switch (action.type) {
		case NavActionType.extendMenu:
			return Object.assign({}, state, {
				extendMenu: !state.extendMenu,
			})
		case NavActionType.hideMenu:
			return Object.assign({}, state, {
				hideMenu: action.isHide,
			})
		default:
			return state
	}
}
export { HeaderReducer as Reducer, key }
