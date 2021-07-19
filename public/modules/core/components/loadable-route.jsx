import React from 'react'
import loadable from '@loadable/component'
import { Loading } from './loading.jsx'
import { Route } from 'react-router-dom'
import Error from './error-handle.jsx'
import store from '../redux/store.js'

// define routes and route's path
import routers from '../../../routes.js'

// generate routes
const Routes = routers.map((route) => {
	return (
		<Route
			key={route.path}
			path={'/' + route.path}
			render={() => {
				// loadable(function-return-promise,object)
				const LoadableComponent = loadable(
					() =>
						import(
							/* webpackChunkName: "[request]" */ `../../${route.file}.client.redux.js`
						)
							.then((data) => {
								store.injectReducer(route.path, data.Reducer)
								return data.CP
							})
							.catch(() => Error),
					{
						fallback: <Loading />,
					}
				)
				return <LoadableComponent />
			}}
		></Route>
	)
})
export default Routes
