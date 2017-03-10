import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from 'store'
import { Provider } from 'react-redux'
import App from 'modules/core/App'


// Makes dynamic route loading more convenient
const loadRoute = cb => module => cb(null, module.default)

// Catch unexpected errors when loading routes
const errorLoading = err => console.error(`Dynamic route loading failed ${err}`)

const AppRouter = props => (
  <Provider {...props} store={store}>
    <Router history={history}>
      <Route path={'/'} component={App}>
        <IndexRoute
          getComponent={
            (location, cb) => {
              System.import('modules/core/pages/Home')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/counter'}
          getComponent={
            (location, cb) => {
              System.import('modules/counter/containers/Base')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/about'}
          getComponent={
            (location, cb) => {
              System.import('modules/core/pages/About')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
      </Route>
      <Route
        path="*"
        getComponent={
          (location, cb) => {
            System.import('modules/core/pages/NotFound')
              .then(loadRoute(cb))
              .catch(err => errorLoading(err))
          }
        }
      />
    </Router>
  </Provider>
)

export default AppRouter
