import React from 'react';
import GoogleLogin from '@matheusluizn/react-google-login';
import ReactDOM from 'react-dom';


const clientId = '';

function LogIn() {

    const responseGoogle = (response) => {
        console.log(response.googleId);
        let id = response.googleId.split('');
        let send = id[0] + id[1];
        window.location.href = '/'+send;
    }


    return (
        <div>
           
            <GoogleLogin
                clientId="1072416820422-as0lps8n67tmd5j3755i4qpvj97f8auk.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                theme='dark'
                
            />

        </div>
    );
}

export default LogIn;