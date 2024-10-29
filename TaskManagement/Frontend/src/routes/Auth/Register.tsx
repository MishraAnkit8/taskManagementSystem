import React, { useState } from 'react';
import { registerUser } from './auth';
import { useNavigate } from 'react-router-dom';
import Input from '../../lib/components/ui/input/Input';
import Card from '../../lib/components/ui/card/card';
import axios from 'axios'; 
import '../../App.css';

const title = "User Registration"
const Register = () => {
  const navigate = useNavigate();

  // Initialize the registration_data state object
  const [registration_data, setUserRegistration] = useState({
    firstname: '',
    lastname: '',
    mobileNo: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (field: string, value: string) => {
    setUserRegistration(() => ({ ...registration_data, [field]: value }));
  };




const handleSubmit = async () => {
  try {
    // Retrieve the CSRF token from cookies
    const csrftoken = document.cookie .split('; ').find(row => row.startsWith('csrftoken'))?.split('=')[1];

    // Make a POST request using Axios
    const response = await axios.post('http://127.0.0.1:8000/api/register/', registration_data, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      }
    });
    console.log('response ==<<>>', response)

 
    if (response.status === 200) {
      alert(response.data.message);
      navigate('/login'); 
    } else {
      alert(response.data.message); 
    }
  } catch (error : any) {
    // Handle error response
    console.error("Error:", error);
    if (error.response) {
      alert(error.response.data.message); 
    } else {
      alert("An error occurred while registering. Please try again.");
    }
  }
};





  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <div className="flex flex-col justify-center font-[sans-serif] w-full max-w-lg p-4 bg-white shadow-lg rounded-3xl md:max-w-md lg:max-w-xl">
        <div className="relative mx-auto mb-6">
          <div className="bg-white w-24 h-24 border-[10px] p-1.5 rounded-full overflow-hidden shadow-md">
            <a href="#!">
              <img
                src="https://readymadeui.com/readymadeui-short.svg"
                alt="logo"
                className="w-full inline-block"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-8">
            Create Account
          </h3>
          <div className="grid grid-cols-1 gap-6 px-2">
            <Input
              type="text"
              placeholder="First Name"
              value={registration_data.firstname}
              onChange={(val) => handleChange('firstname', val)}
              isRequired={true}
              inputClass="mb-4 text-blue-500"
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={registration_data.lastname}
              onChange={(val) => handleChange('lastname', val)}
              isRequired={true}
              inputClass="mb-4"
            />
            <Input
              type="text"
              placeholder="Mobile No."
              value={registration_data.mobileNo}
              onChange={(val) => handleChange('mobileNo', val)}
              isRequired={true}
              inputClass="mb-4"
            />
            <Input
              type="email"
              placeholder="Email"
              value={registration_data.email}
              onChange={(val) => handleChange('email', val)}
              isRequired={true}
              inputClass="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={registration_data.password}
              onChange={(val) => handleChange('password', val)}
              isRequired={true}
              inputClass="mb-4"
            />
            <div className="flex items-center text-left">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 text-sm text-gray-800">
                I accept the
                <a href="#!" className="text-orange-500 font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none rounded-lg transition-all"
              onClick={handleSubmit}
            >
              Create an account
            </button>
          </div>
          <p className="text-sm mt-8 text-center text-gray-800">
            Already have an account?
            <a href="login" className="text-orange-500 font-semibold hover:underline ml-1">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>

  );
};

export default Register;
