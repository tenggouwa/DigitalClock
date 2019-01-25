import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import { I18n } from 'react-i18next'
// import './i18n'
import './styles/App.scss'
import routes from './routes'
import RouteWithSubRoutes from './components/routeWithSubRoutes'
// import Loading from './components/loading'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {routes.map(route => <RouteWithSubRoutes {...route} key={route.path} />)}
                </Switch>
            </Router>
        </div>)
}

// function mapStateToProps(state) {
//     return {
//         visiable: state.root.visiable
//     }
// }

export default connect()(App)
