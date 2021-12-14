// import React from 'react'
// import { Redirect, Route } from 'react-router';
// import { Container, Loader } from 'rsuite';
// import {  useProfile } from '../Context/Profile.context';

// const PublicRouter = ({children, ...routeProps}) => {
//     const {profiles , isloading} = useProfile()

//     if(isloading && !profiles)   //if our data isloading and we dont have profile then it will show loader for loading
//     {
//         return (
//         <Container>
//             <Loader center vertical size="md" content="loading" speed="slow"/>
//         </Container>
//         )
//     }
//     if(profiles && !isloading)   
//     {
//         return <Redirect to="/"/>
//     }
//     return (
//         <Route {...routeProps} >  {/*this will return the home component when user sign in and its children */}
// {children}
//         </Route>
//     )
// }

// export default PublicRouter
import React from 'react'
import { Redirect , Route } from 'react-router'

const PublicRouter = ({children , ...routeProps}) => {
     const Profile = false

// if user created the profile then it will render to home page or else it will be render sigin page
if(Profile)
{
    return <Redirect to="/"/>
}

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}

export default PublicRouter
