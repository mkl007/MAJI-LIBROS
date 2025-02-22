import { FaEdit } from "react-icons/fa";


export const Profile = () => {

  return (
    <div className=" relative h-screen mt-4 mb-4">
      
      <div className="flex">

        <MyDescription />
      </div>
    </div>
  )
}


export const MyDescription = () => {
  return (
    <div className=" w-1/3 container">
      <ImageEditCircle imageUrl={'https://picsum.photos/200/300'} />
      <h1>My Description</h1>

    </div>
  )
}

export const ImageEditCircle = ({ imageUrl }: { imageUrl: string | undefined }) => {
  // const imageUrl =''
  function onEdit() {
    console.log('onEdit clicked')
  }

  return (
    <div className="relative w-44 h-42  border-4 border-slate-300 rounded-full ">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
        style={{ width: '168px', height: '168px' }}
      />
      <button
        onClick={onEdit}
        className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg"
      >
        <FaEdit className="text-gray-700" />
      </button>
    </div>
  );
};



export const TradedBooks = () => {
  return (
    <div className="w-1/3 container">
      <h1>Traded Books</h1>
      <p>There's no traded books yet.</p>
    </div>
  )
}


