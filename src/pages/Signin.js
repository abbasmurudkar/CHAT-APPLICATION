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
//                         <Col xs={24} md={12} mdOffset={6}> 
//                             <Panel>                                     
//                                 <div className="text-center">
//                                     <h1>WELCOME TO CHAT</h1>
//                                     <p>Everything you will chat over here</p>
//                                 </div>
//                                 <div className="mt-3">
//                                     <Button block color="blue" onClick={onFacebookSignin}>               
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

import React, { useState } from 'react'
import { Button, Col, Container, Grid, Icon, Input, InputGroup, Panel, Row } from 'rsuite'

function Signin() {
    const [passwordhidden, setpassword] = useState(false)

    const Security = () => {
        setpassword(!passwordhidden)
    }
    return (
        <Container>
            <Grid className='mt-page'>
                <Row>
                    {/*xs is a small device screen and md is a medium device screen mdoffset is used to set the columns and bring the material at center*/}
                    <Col xs={24} md={12} mdOffset={6}>
                        {/*this is used to have the form as a panel in a container */}
                        <Panel>
                            <div className='text-center'>
                                <h2>WELCOME TO CHATS</h2>
                                <p>Progressive chat application</p>
                            </div>
                            <div className='mt-3'>
                                <div className='mt-3'>
                                    <label htmlFor="user">USERNAME:</label>
                                    <InputGroup>
                                        <Input type='text' id="user" />
                                        <InputGroup.Button>
                                            <Icon icon="user" />
                                        </InputGroup.Button>
                                    </InputGroup>

                                    <label htmlFor="pass">PASSWORD:</label>
                                    <InputGroup>
                                        <Input type={passwordhidden ? "text" : "password"} id="pass" />
                                        <InputGroup.Button onClick={Security}>
                                            <Icon icon={passwordhidden ? "eye" : "eye-slash"} />
                                        </InputGroup.Button>
                                    </InputGroup>

                                    <Button type="submit" className='mt-3' color="red">Submit</Button>
                                </div>
                                <div className='mt-3'>
                                    {/*the block will take the full width according to parent component */}
                                    <Button block color="blue" >
                                        <Icon icon="facebook" /> Login With Facebook
                                    </Button>
                                    <Button block color="green">
                                        <Icon icon="google" /> Login With Google
                                    </Button>
                                    <Button block>
                                        <Icon icon="github" /> Login with Github
                                    </Button>
                                </div>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
}

export default Signin
