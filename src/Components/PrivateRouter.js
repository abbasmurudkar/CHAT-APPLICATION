import React from 'react'
import { Redirect, Route } from 'react-router';

const PrivateRouter = ({children,...routeProps}) => {
    const profile =false;
    if(!profile)   // this condition tell that if we dont have any profile then it will redirect to signin page
    {
        return <Redirect to="/signin"/>
    }
    return (
        <Route {...routeProps} >  {/*this will return the home component when user sign in and its children */}
        </Route>
    )
}

export default PrivateRouter
