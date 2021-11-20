// import React from 'react'
// import { Redirect, Route } from 'react-router';
// import { Container, Loader } from 'rsuite';
// import { useProfile } from '../Context/Profile.context';

// const PrivateRouter = ({ children, ...routeProps }) => {
//     const {profiles,isloading}= useProfile()

//     if(isloading && !profiles)   //if our data isloading and we dont have profile then it will show loader for loading
//     {
//         return (
//         <Container>
//             <Loader center vertical size="md" content="loading" speed="slow"/>
//         </Container>
//         )
//     }

//     if (!profiles&&!isloading )   // this condition tell that if we dont have any profile then it will redirect to signin page by default it is said to false
//     //if we dont have profile and data is not loading
//     {
//         return <Redirect to="/signin" />
//     }
//     return (
//         <Route {...routeProps} >  {/*this will return the home component when user sign in and its children */}
//             {children}
//         </Route>
//     )
// }

// export default PrivateRouter

import React from 'react'
import { Redirect, Route } from 'react-router';

const PrivateRouter = ({children , ...routeProps}) => {

    const profile = false;

    if(!profile)
    {
        return <Redirect to = "/sigin"/>
    }
    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}

export default PrivateRouter
