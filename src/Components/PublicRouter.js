import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import {  useProfile } from '../Context/Profile.context';

const PublicRouter = ({children, ...routeProps}) => {
    const {profile , isloading} = useProfile()

    if(isloading && !profile)   //if our data isloading and we dont have profile then it will show loader for loading
    {
        return (
        <Container>
            <Loader center vertical size="md" content="loading" speed="slow"/>
        </Container>
        )
    }
    if(profile && !isloading)   // if user created the profile then it will render to home page
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
