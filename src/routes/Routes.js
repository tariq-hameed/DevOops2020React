import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { PageNotFoundView } from '../views/PageNotFoundView'
import {SignInView} from '../views/SignInView'
import RoutinPath from './RoutingPath'
export const Routes = (props) => {

    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutinPath.HomeView} component={HomeView} />
                <Route exact path={RoutinPath.SignInView} component={SignInView} />
                <Route component={PageNotFoundView} />
            </Switch>
        </Router>
    )
}