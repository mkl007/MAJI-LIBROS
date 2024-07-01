import { useGetToken } from '../hooks/useGetToken'
import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth';


export const Profile = () => {
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

useEffect(() => {
    if (isLoggedIn) console.log('from Profile', isLoggedIn)

})

  return (
    // <div className=' container  h-full w-4/5  pb-96 mx-auto border-2 border-slate-950'>
    <div className=' container h-screen border-3 border-slate-950'>

      <p>Loading...</p> :
      <p>User Info: {JSON.stringify(data?.userInfo)} </p>



    </div>
  );
};

// src/components/Profile.tsx
// https://tse4.mm.bing.net/th?id=OIG2.JiH3IwnSMljWVuM4IEop&pid=ImgGn



