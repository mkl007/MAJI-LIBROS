import React, { useEffect, useState } from 'react';
import { genres } from '../utils/contsToExport.util';
import { FeedItem } from './Feeds.compoment';
import { useBook } from '../hooks/useBook';



export interface BookFormData {
    id?: number,
    bookTitle: string;
    author: string;
    description?: string;
    publicationYear?: number;
    genre: string;
    coverImage: File | null | string;
    backCoverImage: File | null;
    availabilityStatus: 'exchange' | 'sell' | 'both';
    price?: number;
    uploadContentPdf: File | null;
}

export interface BookFormProps {
    onSubmit: (data: BookFormData) => void;
    // onSubmit: (e: React.FormEvent, data: BookFormData) => void;
}


export const AddNewBookForm: React.FC = () => {
    // export const AddNewBookForm: React.FC<BookFormProps> = () => {
    const { onSubmitBookForm } = useBook()
    const [isOnSubmit, setIsOnSubmit] = useState<boolean>(false)
    const [image, setImage] = useState<string | null>(null)
    const [docs, setDocs] = useState<string | null>(null)
    const [formData, setFormData] = useState<BookFormData>({
        bookTitle: '',
        author: '',
        description: '',
        publicationYear: undefined,
        genre: '',
        coverImage: null,
        backCoverImage: null,
        availabilityStatus: 'both',
        price: undefined,
        uploadContentPdf: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, files } = e.target;
        const file = files?.[0]; 
        if (file && file.type == 'application/pdf') {
            console.log(file.type)
            formData.uploadContentPdf = file
            // const reader = new FileReader();
            // // reader.onloadend = () => docs ? setImage(reader.result as string) : setDocs(reader.result as string);
            // reader.onloadend = () => setImage(reader.result as string);
            // reader.readAsDataURL(file);

            setFormData((prev) => ({ ...prev, [name]: file }));
            console.log(formData)

        } else if (file && file.type != 'application/pdf') {
            console.log(file.type)
            // const reader = new FileReader();
            // reader.onloadend = () => setImage(reader.result as string);
            // reader.readAsDataURL();
            formData.coverImage = file
            setFormData((prev) => ({ ...prev, [name]: file }));
            console.log(formData)
        }

    };


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsOnSubmit(true)
        onSubmitBookForm(formData);
    }
    return (
        <div className="container flex mx-auto p-4">
            {/* <div className="container mx-auto p-4 w-1/2 border-2 border-slate-800"> */}
            <div>
                <form className="bg-slate-300 shadow-md rounded p-6" onSubmit={onSubmit}>
                    <div className="flex mb-4">
                        <div className="w-full md:w-1/2 pr-2">
                            <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700">Book Title <span className='text-red-700'>*</span></label>
                            <input
                                type="text"
                                id="bookTitle"
                                name="bookTitle"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                value={formData.bookTitle}
                                onChange={handleChange}
                                required
                                placeholder='   Title'
                            />
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author <span className='text-red-700'>*</span></label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                value={formData.author}
                                onChange={handleChange}
                                required
                                placeholder='  Name'
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            value={formData.description}
                            onChange={handleChange}
                            // disabled={formData.uploadContentPdf}
                            placeholder='Description'
                        />
                    </div>

                    <div className="flex mb-4">
                        <div className="w-full md:w-1/2 pr-2">
                            <label htmlFor="uploadContentPdf" className="block text-sm font-medium text-gray-700">Upload Content as PDF <span className='text-red-700'>*</span></label>
                            <div className="mt-1 flex items-center">
                                <input
                                    type="file"
                                    id="descriptionFile"
                                    name="descriptionFile"
                                    className="ml-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    onChange={handleFileChange}
                                    accept="application/pdf"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 pl-2">
                            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Gender <span className='text-red-700'>*</span></label>
                            <select
                                id="genre"
                                name="genre"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                value={formData.genre}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a Gender</option>
                                {genres.map((genre) => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="w-full md:w-1/2 pr-2">
                            <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">Cover Image <span className='text-red-700'>*</span></label>
                            <input
                                type="file"
                                id="coverImage"
                                name="coverImage"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <label htmlFor="backCoverImage" className="block text-sm font-medium text-gray-700">Back Cover Image</label>
                            <input
                                type="file"
                                id="backCoverImage"
                                name="backCoverImage"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Availability Status <span className='text-red-700'>*</span></label>
                        <div className="mt-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="availabilityStatus"
                                    value="exchange"
                                    className="form-radio"
                                    checked={formData.availabilityStatus === 'exchange'}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Exchange</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    name="availabilityStatus"
                                    value="sell"
                                    className="form-radio"
                                    checked={formData.availabilityStatus === 'sell'}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Sell</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    name="availabilityStatus"
                                    value="both"
                                    className="form-radio"
                                    checked={formData.availabilityStatus === 'both'}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Both options</span>
                            </label>
                            {(formData.availabilityStatus === 'sell' || formData.availabilityStatus === 'both') && (
                                <div className="mt-1 inline-flex items-center">
                                    <label htmlFor="price" className="ml-6 text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        className="ml-2 border border-gray-300 rounded-md shadow-sm p-2"
                                        value={formData.price}
                                        onChange={handleChange}
                                        min="0"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm">Publish</button>
                    <button type="submit" className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-sm">Save as draft</button>

                </form>
            </div>


            {/* {
                formData.coverImage ? (
                    <div className="container w-1/3">
                        <FeedItem
                            key={formData.id}
                            id={formData.id}
                            author={formData.author}
                            bookTitle={formData.bookTitle}
                            coverImage={image}
                            availabilityStatus={formData.availabilityStatus}
                            price={formData.price}
                        />

                    </div>
                ) : ('')
            } */}



        </div>
    );
};


