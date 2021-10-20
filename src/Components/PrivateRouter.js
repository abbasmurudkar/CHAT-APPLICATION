import React from 'react'
import { Redirect, Route } from 'react-router';
import { useProfile } from '../Context/Profile.context';

const PrivateRouter = ({ children, ...routeProps }) => {
    const profile = useProfile()
    if (!profile)   // this condition tell that if we dont have any profile then it will redirect to signin page by default it is said to false
    {
        return <Redirect to="/signin" />
    }
    return (
        <Route {...routeProps} >  {/*this will return the home component when user sign in and its children */}
            {children}
        </Route>
    )
}

export default PrivateRouter
