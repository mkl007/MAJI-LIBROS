import { AddNewBookForm } from "../components/AddNewBookForm"

export const AddNewBook = () => {

  return (
    <div className="container ">
      <h2> Add new book</h2>
      <div className="container flex ">
        <AddNewBookForm />
      </div>
    </div>
  )
}

//     const file = e.target.files?.[0];
//     if (file) {
//       // console.log(files)
//       const reader = new FileReader();
//       reader.onloadend = () => setImage(reader.result as string);
//       reader.readAsDataURL(file);
//     }
//     console.log(image);
//   };

//   return (
//     <form className="p-4">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//       />
//       {image && <img src={image} alt="Preview" className="w-32 h-32 object-cover" />}
//     </form>
//   );
// };