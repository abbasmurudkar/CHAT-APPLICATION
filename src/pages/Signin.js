// import React from 'react'
// import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite'
// import { auth, database } from '../misc/firebase'
// import firebase from 'firebase/app'

// const Signin = () => {

//     const onFacebookSignin = () => {
//         SigninWithProvider(new firebase.auth.FacebookAuthProvider())
//     }
//     const onGooleSignin = () => {
//         SigninWithProvider(new firebase.auth.GoogleAuthProvider())
//     }
//     const SigninWithProvider = async (provider) => {
//     try {
//         const { additionalUserInfo,user} = await auth.signInWithPopup(provider)
//         // console.log(result)
//         if(additionalUserInfo.isNewUser)
//         {
//            await database.ref(`/profiles/${user.uid}`).set({
//                 name:user.displayName,
//                 created : firebase.database.ServerValue.TIMESTAMP       //this will provide the time the user has login or created by using this timestamp method
//             })
//         }  
//         Alert.success('SUCCESFULL LOGIN',4000)
//     } catch (error) {
//         Alert.info(error.message,4000)
//     }


//     }
//     return (
//         <>
//             <Container >
//                 <Grid className="mt-page">
//                     <Row>
//                         <Col xs={24} md={12} mdOffset={6}> {/*xs is a small device screen and md is a medium device screen mdoffset is used to set the columns and bring the material at center*/}
//                             <Panel>                                     {/*this is used to have the form as a panel in a container */}
//                                 <div className="text-center">
//                                     <h1>WELCOME TO CHAT</h1>
//                                     <p>Everything you will chat over here</p>
//                                 </div>
//                                 <div className="mt-3">
//                                     <Button block color="blue" onClick={onFacebookSignin}>                {/*the block will take the full width according to parent component */}
//                                         <Icon icon="facebook" /> Sign in with facebook
//                                     </Button>
//                                     <Button block color="green" onClick={onGooleSignin}>
//                                         <Icon icon="google" /> Sign in with Google</Button>
//                                 </div>
//                             </Panel>
//                         </Col>
//                     </Row>
//                 </Grid>
//             </Container>

//         </>

//     )
// }

// export default Signin

