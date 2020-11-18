import React from 'react'
import Logotype from '../../shared/Images/logotype.svg'
import {useHistory} from 'react-router-dom'
import RoutinPath from '../../routes/RoutingPath'
import './NavigationBar.css'

export const NavigationBar = () => {
    const history = useHistory()
    return (
        <div className="navigationBarWrapper">
         
            <img 
                onClick={() => history.push(RoutinPath.HomeView)}
                className="logotype"
                src = {Logotype} 
                alt ={"Error .."} />
                <span className="signIn" onClick={()=> history.push(RoutinPath.SignInView)}>Sign In</span>
        </div>
    )
}
