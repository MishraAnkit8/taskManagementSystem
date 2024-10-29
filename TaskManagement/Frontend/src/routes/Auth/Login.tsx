import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../lib/components/ui/input/Input';
import Card from '../../lib/components/ui/card/card';
import axios from 'axios'; 
import '../../App.css';
import { error } from 'console';

const Login = () => {
    const navigate = useNavigate()

    // for set the login details state
    const [login_details, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    // function for handle updation of state
    const handleChange = (field: string, value: string) => {

        setLoginDetails(() => ({...login_details, [field] : value}))
    } 

    // function for submit details
    const handleSubmit = async() => {
        try{
            console.log('login_details ===<<<>>>>', login_details);
            const csrftoken = document.cookie .split('; ').find(row => row.startsWith('csrftoken'))?.split('=')[1];
            console.log('csrftoken ===<<<<>>>>', csrftoken);
    
    
            const response = await axios.post('http://127.0.0.1:8000/api/login/', login_details, {
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken,
                }
              });
    
            console.log('response ===<<<>>>>', response)
    
            if(response.status === 200){
                navigate('/home')
            }
            else{
                alert(response.data.message)
            }
        }
        catch(error : any){
            if(error.response){
                alert(error.response.data.message); 

            }
            else {
                alert("An error occurred while login. Please try again.");
              }

        }

    }

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
                type="email"
                placeholder="Email"
                value={login_details.email}
                onChange={(val) => handleChange('email', val)}
                isRequired={true}
                inputClass="mb-4"
              />
              <Input
                type="password"
                placeholder="Password"
                value={login_details.password}
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
                  Remember me
                </label>
              </div>
            </div>
  
            <div className="mt-8">
              <button
                type="button"
                className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none rounded-lg transition-all"
                onClick={handleSubmit} >
                Submit
              </button>
            </div>
            <p className="text-sm mt-8 text-center text-gray-800">
              For  Register ?
              <a href="register" className="text-orange-500 font-semibold hover:underline ml-1">
                Click Here 
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
 
  export default Login