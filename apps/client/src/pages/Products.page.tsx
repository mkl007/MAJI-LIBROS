import { useState, useEffect } from "react";
import axios from 'axios';
import instanceAxios from "../api/axiosSetup";




export const Products = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/dashboard`);
        console.log(response.data)
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error.response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const logoutFct = () => {
    window.location.href = 'http://localhost:3000/logout'
  }
  return (
    <div>
      <button onClick={logoutFct}>Logout</button>

      <h1>Profile</h1>
      <p>Username: {JSON.stringify(user)}</p>

      <p>Here you will be able to manage your profile</p>

    </div>
  )
}
