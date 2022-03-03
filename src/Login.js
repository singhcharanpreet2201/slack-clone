import React from 'react';
import "./Login.css";
import {Button} from "@mui/material";
import { auth, provider } from './firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                alert(error.message);
            });
      }


    return (

        <div className='login'>
            <div className='login__container'>
              <img src='https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-ex8w65/Slack_RGB.svg' alt='userImage' />

                <h1>Sign in to Charanpreet Singh HQ</h1>
                <p>Charanpreetsingh.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;