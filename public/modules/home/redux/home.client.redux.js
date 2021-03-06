import { connect } from 'react-redux'
import Home from '../views/home.client.view.jsx'
const HOME_RENDER = 'HOME_RENDER'
const HomeSTP = (state) => {
	return state.home
}

const HomeDTP = (dispatch) => {
	return {
		render: () => dispatch({ type: HOME_RENDER }),
	}
}

const HomeRedux = connect(HomeSTP, HomeDTP)(Home)

export { HomeRedux as Page }
