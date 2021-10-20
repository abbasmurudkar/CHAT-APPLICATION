import React from 'react'
import { Redirect, Route } from 'react-router';
import {  useProfile } from '../Context/Profile.context';

const PublicRouter = ({children, ...routeProps}) => {
    const profile = useProfile()
    if(profile)   // if user created the profile then it will render to home page
    {
        return <Redirect to="/"/>
    }
    return (
        <Route {...routeProps} >  {/*this will return the home component when user sign in and its children */}
{children}
        </Route>
    )
}

export default PublicRouter