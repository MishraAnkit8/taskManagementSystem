import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homepage: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/homepage/');
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Homepage;

// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import DefaultLayout from '../lib/components/layout/DefaultLayout';
// // import Loader from '../lib/common/Loader/index';
// import Profile from '../lib/pages/Profile';
// import PageTitle from '../lib/pages/PageTitle';


// const Dashboard = () => {
 
  
 
  
//     return (
//       <div>

// <DefaultLayout>
//       <Routes>
      
//         <Route
//           path="/profile"
//           element={
//             <>
//               <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <Profile />
//             </>
//           }
//         />
      
   
     
     
    
      
      
//       </Routes>
//     </DefaultLayout>
//       </div>
//     );
//   };
  
//   export default Dashboard;
