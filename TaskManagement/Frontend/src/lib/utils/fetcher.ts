

import { json, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';       
// import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles
import type { ApiResponse } from '../../lib/types/request.types';


type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; 

export const fetchApi = async <T>({
  url,
  method,
  body,
  customOptions,
}: {
  url: string;
  method: HttpMethod;
  body?: object | null;
  customOptions?: RequestInit;
}): Promise<ApiResponse<T>> => {
  try {
    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      ...customOptions,
    };

    if (method !== 'GET' && body) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, requestOptions);

    let errorData = null;
    if (!response.ok) {
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: 'Error' };
      }
      console.log('Error status code:', errorData.status);

      if (errorData.status === 401 || errorData.status === 440) {
        console.log('Redirecting to login');
        window.location.href = `/login`;
      }

      return { json: null, error: errorData };
    }

    const json = await response.json();
    return { json, error: null };
  } catch (error) {
    console.log('Network error:', error);
    return { json: null, error: { message: 'Network error or something went wrong' } };
  }
};
``

function async<T>(arg0: { url: any; method: any; body: any; customOptions: any; }, arg1: { url: any; method: any; body: number; customOptions: any; }) {
    throw new Error('Function not implemented.');
}

