import React, { useEffect, useState } from 'react';
import { genders } from '../utils/contsToExport.util';
import { useBook } from '../hooks/useBook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MiniLoadingSpinner } from '../utils/MiniLoadingSnipper';
import { ButtonComponent } from './ui/ButtonComponent';

export interface BookFormData {
    _id?: string,
    bookTitle: string;
    author: string;
    description?: string;
    publicationYear?: number;
    gender: string;
    coverImage: File | null;
    backCoverImage: File | null;
    availabilityStatus: 'exchange' | 'sell' | 'not-available';
    price?: number;
    uploadContentPdf: File | null;
}

export const AddNewBookForm: React.FC = () => {
    const { onSubmitBookForm, resStatus, isLoadingBook, setIsLoadingBook } = useBook()
    const [isOnSubmit, setIsOnSubmit] = useState<boolean>(false)
    const navigate = useNavigate()
    const [isNotification, setIsNotification] = useState<boolean>(false)
    const [formData, setFormData] = useState<BookFormData>({
        bookTitle: '',
        author: '',
        description: '',
        publicationYear: undefined,
        gender: '',
        coverImage: null,
        backCoverImage: null,
        availabilityStatus: 'sell',
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
            formData.uploadContentPdf = file
            setFormData((prev) => ({ ...prev, [name]: file }));


        } else if ((file && file.type != 'application/pdf') && name == 'coverImage') {
            formData.coverImage = file
            setFormData((prev) => ({ ...prev, [name]: file }));

        } else if ((file && file.type != 'application/pdf') && name == 'backCoverImage') {
            formData.backCoverImage = file;
            setFormData((prev) => ({ ...prev, [name]: file }));
        }

    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsOnSubmit(true)
        onSubmitBookForm(formData);
        setIsLoadingBook(true)

    }

    useEffect(() => {
        if (resStatus > 0) {
            setIsLoadingBook(false)
            setTimeout(() => {
                toast.success('New Book created! ')
                setIsNotification(true)
                setTimeout(() => {
                    navigate('/mybooks')
                }, 1800);
            }, 200);


        }
    })

    return (
        <div className="container flex mx-auto p-4">
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
                                    id="uploadContentPdf"
                                    name="uploadContentPdf"
                                    className="ml-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    onChange={handleFileChange}
                                    accept="application/pdf"
                                    required
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 pl-2">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender <span className='text-red-700'>*</span></label>
                            <select
                                id="gender"
                                name="gender"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a Gender</option>
                                {genders.map((gender) => (
                                    <option key={gender} value={gender}>{gender}</option>
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
                                required
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
                        <div className="mt-1 required">
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
                                    value="not-available"
                                    className="form-radio"
                                    checked={formData.availabilityStatus === 'not-available'}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Not Available</span>
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
                            {(formData.availabilityStatus === 'sell') && (
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
                    <div className='flex'>
                        <ButtonComponent
                            onClick={() => null}
                            text='Publish'
                            type='submit'
                            className='bg-green-500 mt-4 px-4'

                        />

                        <ButtonComponent
                            onClick={() => null}
                            text='Save as Draft'
                            type='submit'
                            className='bg-blue-500 mt-4 px-4'

                        />

                    </div>

                </form>
            </div>

            <div>
                {
                    isLoadingBook && <MiniLoadingSpinner />
                }
                {
                    isNotification && <div><ToastContainer /></div>
                }
            </div>
        </div>
    );
};


