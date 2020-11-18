import React, { useContext } from 'react'
import Logotype from '../../shared/Images/logotype.svg'
import {useHistory} from 'react-router-dom'
import RoutinPath from '../../routes/RoutingPath'
import {UserContext} from '../../shared/provider/UserProvider'
import './NavigationBar.css'

export const NavigationBar = () => {
    const history = useHistory()
    const [authenticatedUser] = useContext(UserContext)


    return (
        <div className="navigationBarWrapper">
         
            <img 
                onClick={() => history.push(RoutinPath.HomeView)}
                className="logotype"
                src = {Logotype} 
                alt ={"Error .."} />
            <span className="signIn" 
                onClick={()=> history.push(RoutinPath.SignInView)}>Sign In
            </span>
            <span>
                {authenticatedUser}
            </span>
        </div>
    )
}
