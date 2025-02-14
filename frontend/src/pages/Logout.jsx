import {GoogleLogout} from 'react-google-login';

const clientId = '1072416820422-as0lps8n67tmd5j3755i4qpvj97f8auk.apps.googleusercontent.com';

function Logout() {
    const onSuccess = (res) => {
        alert('Logout made successfully');
       
    };

    const OnFailure = () => {
        alert('Logout failed');
        console.log('Logout failed');
    
    }

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
                onFailure={OnFailure}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;