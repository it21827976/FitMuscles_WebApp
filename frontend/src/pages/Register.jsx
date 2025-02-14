import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../images/bglo.jpeg';
import Img1 from '../images/i1.png';
import Img2 from '../images/i2.png';
import Img3 from '../images/i3.png';
import logo from '../images/logo.png';

// Base URL for the backend
const BASE_URL = 'http://localhost:8080/api/v1/user'; // Adjust according to your setup

const Register = () => {
  const navigate = useNavigate(); // For navigation after registration
  const [name, setName] = useState(''); // State for storing user name
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // For error handling

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email: email,
          gender: gender,
          password: password,
        }),
      });

      if (response.ok) {
        // If registration is successful, just navigate to the login page
        navigate('/login');
      } else {
        // If not successful, try to get error message from the response
        const errorText = await response.text(); // Get response as plain text
        setErrorMessage(`Registration failed: ${errorText}`);
      }
    } catch (error) {
      // Handle unexpected exceptions and avoid parsing errors
      setErrorMessage(`An error occurred during registration: ${error.message}`);
    }
  };



  const addImg = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${Img})`,
    backgroundSize: 'cover',
  };

  return (
    <div className='flex items-center justify-around' style={addImg}>
      <div className='box-1 w-[30%]' />

      <div className='box-2'>
        <div className='form-body card text-black w-[420px]'>
          <div className='head flex justify-center items-center mt-2'>
            <img src={logo} alt='' width={130} />
          </div>

          <form className='py-4 px-3' onSubmit={handleSubmit}>
            <h1 className='text-center text-2xl font-bold mb-2 underline'>Register</h1>

            <div class='col-md-6 w-[100%]'>
              <label for='inputName' class='form-label'>Name</label>
              <input
                type='text'
                class='form-control'
                id='inputName'
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class='col-md-6 w-[100%]'>
              <label for='inputEmail' class='form-label'>Email</label>
              <input
                type='email'
                class='form-control'
                id='inputEmail'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='col-md-6 w-[100%]'>
              <label htmlFor='inputGender' className='form-label'>
                Gender
              </label>
              <select
                className='form-select'
                id='inputGender'
                onChange={(e) => setGender(e.target.value)}
              >
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>

              </select>
            </div>

            <div class='col-md-6 w-[100%]'>
              <label for='inputPassword' class='form-label'>Password</label>
              <input
                type='password'
                class='form-control'
                id='inputPassword'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {errorMessage && (
              <div className='col-md-6 w-[100%] text-red-600 text-center mt-2'>
                {errorMessage}
              </div>
            )}

            <div className='col-md-6 w-[100%] mt-3'>
              <a href='/login' className='text-black'>
                Already have an account? <span className='text-orange-500'>Login</span>
              </a>
            </div>

            <button
              style={{ backgroundColor: '#FF4400', border: 'none', outline: 'none' }}
              type='submit'
              class='btn btn-primary my-3 w-[100%]'
            >
              Register
            </button>

            {/* <hr className='mt-2' />

            <div class='col-md-6 w-[100%] flex items-center justify-center mt-3'>
              <a href='!' className='text-black mx-2'>
                <img src={Img1} alt='' width={35} />
              </a>
              <a href='!' className='text-black mx-2'>
                <img src={Img2} alt='' width={35} />
              </a>
              <a href='!' class='text-black mx-2'>
                <img src={Img3} alt='' width={35} />
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
