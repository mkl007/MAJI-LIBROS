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
  // if (data?.userInfo?.accountID) {
  //   console.log(data.userInfo.accountID)
  // }
  // console.log(data)

  // const CUser = JSON.stringify(data)
  return (
    <div className=' container  flex w-4/5  pb-96 mx-auto border-2 border-slate-950'>

      <p>Loading...</p> :
      <p>User Info: {JSON.stringify(data?.userInfo)} </p>


    </div>
  );
};

// src/components/Profile.tsx
//// https://tse4.mm.bing.net/th?id=OIG2.JiH3IwnSMljWVuM4IEop&pid=ImgGn

// export const Profile: React.FC = () => {
//   const { data, getUserInfo, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn } = useAuth()

//   const token = useGetToken();
//   useEffect(() => {
//     if (token != null) {
//       setIsLoading(true);
//       setIsLoggedIn(false)

//       getUserInfo(token).then(() => {
//         setIsLoading(false);
//         setIsLoggedIn(true)
//       });
//     }
//   }, [token]);
//   // if (data?.userInfo?.accountID || data?.userInfo) {
//   //   console.log(data.userInfo.email)

//   // }



//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex items-center space-x-4">
//         <img
//           src="https://via.placeholder.com/100"
//           alt="Foto de perfil"
//           className="w-16 h-16 rounded-full"
//         />
//         <div>
//           <h1 className="text-xl font-semibold">Nombre Apellido</h1>
//           <p className="text-gray-600">Desarrollador Frontend</p>
//         </div>
//       </div>
//       <p className="mt-4 text-gray-700">
//         Apasionado por crear experiencias web increíbles. Me encanta el diseño
//         y la programación.
//       </p>
//       <div className="mt-6">
//         <a
//           href="https://linkedin.com/in/tu-perfil"
//           className="text-blue-500 hover:underline"
//         >
//           LinkedIn
//         </a>
//         <span className="mx-2 text-gray-400">|</span>
//         <a
//           href="https://github.com/tu-usuario"
//           className="text-gray-500 hover:underline"
//         >
//           GitHub
//         </a>
//       </div>
//       <div className="mt-4">
//         <p className="text-gray-600">Seguidores: 1000</p>
//         <p className="text-gray-600">Publicaciones: 50</p>
//       </div>
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold">Habilidades</h2>
//         <ul className="mt-2 space-y-2">
//           <li>React</li>
//           <li>TypeScript</li>
//           <li>Tailwind CSS</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

