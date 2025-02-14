import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use this for navigation after login
import Img from '../images/bglo.jpeg';
import Img1 from '../images/i1.png';
import Img2 from '../images/i2.png';
import Img3 from '../images/i3.png';
import logo from '../images/logo.png';
import { gapi} from 'gapi-script';
import Loging from '../pages/Loging';

// Base URL for the backend
const BASE_URL = 'http://localhost:8080/api/v1/user'; // Adjust according to your setup

const Login = () => {
  const navigate = useNavigate(); // Use this to navigate to a different page after login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // For displaying error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // POST request to backend with login details
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Use JSON data format
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) { // If the response is successful
        const data = await response.json(); // Parse the JSON data
        if (data.status) { // If login is successful
          // Navigate to a different page, e.g., a dashboard
          const arr = data.email.split(' ');
          navigate('/'+ arr[1]);
          console.log(arr[1]);

        } else { // If login fails
          setErrorMessage(data.message); // Set error message from backend
        }
      } else {
        setErrorMessage('Error connecting to the backend'); // General error handling
      }
    } catch (error) {
      setErrorMessage('An error occurred during login'); // Catch exceptions
    }
  };

  const addImg = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${Img})`,
    backgroundSize: 'cover',
  };

  const clientId = '1072416820422-as0lps8n67tmd5j3755i4qpvj97f8auk.apps.googleusercontent.com';

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };

    gapi.load('client:auth2', start);
  }, []);

  return (
    <div className='flex items-center justify-around' style={addImg}>
      <div className='box-1 w-[30%]' />

      <div className='box-2'>
        <div className='form-body card text-black w-[420px]'>
          <div className='head flex justify-center items-center mt-2'>
            <img src={logo} alt='' width={130} />
          </div>

          <form className='py-4 px-3' onSubmit={handleSubmit}>
            <h1 className='text-center text-2xl font-bold mb-2 underline'>Sign in</h1>

            <div class='col-md-6 w-[100%]'>
              <label for='inputEmail4' class='form-label'>Email</label>
              <input
                type='email'
                class='form-control'
                id='inputEmail4'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class='col-md-6 w-[100%]'>
              <label for='inputPassword4' class='form-label'>Password</label>
              <input
                type='password'
                class='form-control'
                id='inputPassword4'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {errorMessage && (
              <div className='col-md-6 w-[100%] text-red-600 text-center mt-2'>
                {errorMessage}
              </div>
            )}

            <div class='col-md-6 w-[100%] mt-3'>
              <a href='/register' className='text-black'>
                Don't have an account? <span className='text-orange-500'>Register</span>
              </a>
            </div>

            <button
              style={{ backgroundColor: '#FF4400', border: 'none', outline: 'none' }}
              type='submit'
              class='btn btn-primary my-3 w-[100%]'
            >
              Sign in
            </button>

            <hr className='mt-2' />

            <div class='col-md-6 w-[100%] flex items-center justify-center mt-3'>
              <a href='!' className='text-black mx-2'>
                {/* <img src={Img1} alt='' width={35} /> */}
                <Loging/>
              </a>
              {/* <a href='!' className='text-black mx-2'>
                <img src={Img2} alt='' width={35} />
              </a>
              <a href='!' className='text-black mx-2'>
                <img src={Img3} alt='' width={35} />
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
