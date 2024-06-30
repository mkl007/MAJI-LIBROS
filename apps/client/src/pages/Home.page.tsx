import { useEffect } from 'react';
import { Feeds } from '../components/Feeds.compoment'
import { useAuth } from '../hooks/useAuth'
import { useGetToken } from '../hooks/useGetToken';

export const HomePage = () => {

  // const { getUserInfo, setIsLoading, setIsLoggedIn, data } = useAuth()
  // const token = useGetToken();

  // useEffect(() => {
  //   if (token != null) {
  //     setIsLoading(true);

  //     getUserInfo(token).then(() => {
  //       setIsLoading(false);
  //       setIsLoggedIn(true)
  //     });
  //   }
  // }, [token]);
  // console.log(data)

  return (
    <div className='pt-28'>
      <Feeds />

    </div>
  )
}

