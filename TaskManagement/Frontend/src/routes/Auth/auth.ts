import axios from 'axios';

const REACT_APP_PUBLIC_API_BASE_URL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

export const loginUser = async (login_details: { username: string; password: string }) => {
  try {
    const response = await fetch(`${REACT_APP_PUBLIC_API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login_details),
    });

    console.log('response ===<<<>>>>>', response)
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Error: ${errorResponse.message || 'Something went wrong'}`);
    }

    const data = await response.json();
    console.log('login successful:', data);

    return data;
  } catch (error) {
    console.error('login failed:', error);
  }
};




export const registerUser = async (registration_data: {
  firstname: string;
  lastname: string;
  mobileNo: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registration_data),
    });

  
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Error: ${errorResponse.message || 'Something went wrong'}`);
    }

    const data = await response.json();
    
    console.log('Registration successful:', data);
    
    return data;
  } catch (error) {
    console.error('Registration failed:', error);
  }
};



  export const verifyOTP = async (mobileNo: string, otp: string, userData: any) => {
    return fetch('http://localhost:8080/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobileNo, otp, userData })
    });
  };
  