// import { useState, useEffect } from "react";
// import axios from 'axios';
// import instanceAxios from "../api/axiosSetup";

import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth"
import { useGetToken } from "../hooks/useGetToken";
import { } from "react-router-dom";



// export const Products = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/v1/dashboard`);
//         console.log(response.data)
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error fetching profile:', error.response.data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   const logoutFct = () => {
//     window.location.href = 'http://localhost:3000/logout'
//   }
//   return (
//     <div className="h-screen mt-96">
//       <button onClick={logoutFct}>Logout</button>

//       <h1>Profile</h1>
//       <p>Username: </p>

//       <p>Here you will be able to manage your profile</p>

//     </div>
//   )
// }




export const Products = () => {
  const { data, getUserInfo, isLoading, setIsLoading, isLoggedIn } = useAuth()
  const token = useGetToken();
  
  useEffect(() => {
    if (token != null) {
      setIsLoading(true);


      getUserInfo(token).then(() => {
        setIsLoading(false);
      });
    }
    
  }, [token]);

  console.log(isLoggedIn)
  return (
    <div>Products page</div>
  )
}
