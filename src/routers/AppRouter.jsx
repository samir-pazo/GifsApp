import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardRouters from './DashboardRouters'

const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    
                    <Route path="/" component={ DashboardRouters } />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter


//<Route exact path="/login" component={ LoginScreem } /> *PRIMERO CUANDO EL LOGIN NO NECESITA NAVBAR*