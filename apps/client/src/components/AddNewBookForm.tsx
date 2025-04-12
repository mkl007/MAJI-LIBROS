import React, { useEffect, useState } from 'react';
import { genders } from '../utils/contsToExport.util';
import { useBook } from '../hooks/useBook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MiniLoadingSpinner } from '../utils/MiniLoadingSnipper';
import { ButtonComponent } from './ui/ButtonComponent';
import { FaDraft2Digital, FaShare } from 'react-icons/fa6';

export interface BookFormData {
    _id?: string;
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

const initialFormState: BookFormData = {
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
};

export const AddNewBookForm: React.FC = () => {
    const { onSubmitBookForm, resStatus, isLoadingBook, setIsLoadingBook } = useBook();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<BookFormData>(initialFormState);
    const [isNotification, setIsNotification] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' || name === 'publicationYear' ? Number(value) : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files?.[0]) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoadingBook(true);
        onSubmitBookForm(formData);
    };

    useEffect(() => {
        if (resStatus > 0) {
            setIsLoadingBook(false);
            toast.success('New Book created!');
            setIsNotification(true);
            setTimeout(() => navigate('/mybooks'), 1800);
        }
    }, [resStatus, setIsLoadingBook, navigate]);

    return (
        <div className="containe">
            <form className="bg-slate-300 shadow-md rounded p-6" onSubmit={handleSubmit}>
                {/* Book Title & Author */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    {[
                        { id: 'bookTitle', label: 'Book Title', required: true, placeholder: 'Title' },
                        { id: 'author', label: 'Author', required: true, placeholder: 'Name' },
                    ].map(({ id, label, required, placeholder }) => (
                        <div key={id} className="w-full">
                            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                                {label} {required && <span className="text-red-700">*</span>}
                            </label>
                            <input
                                type="text"
                                id={id}
                                name={id}
                                required={required}
                                className="mt-1 w-full border rounded-md shadow-sm p-2"
                                value={formData[id as keyof BookFormData] as string}
                                onChange={handleChange}
                                placeholder={placeholder}
                            />
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 w-full border rounded-md shadow-sm p-2"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                </div>

                {/* PDF Upload & Gender */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="w-full">
                        <label htmlFor="uploadContentPdf" className="block text-sm font-medium text-gray-700">
                            Upload Content as PDF <span className="text-red-700">*</span>
                        </label>
                        <input
                            type="file"
                            id="uploadContentPdf"
                            name="uploadContentPdf"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            required
                            className="mt-1 w-full border rounded-md shadow-sm p-2"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Gender <span className="text-red-700">*</span>
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="mt-1 w-full border rounded-md shadow-sm p-2"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a Gender</option>
                            {genders.map((g) => (
                                <option key={g} value={g}>
                                    {g}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Images */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    {[
                        { id: 'coverImage', label: 'Cover Image', required: true },
                        { id: 'backCoverImage', label: 'Back Cover Image', required: false },
                    ].map(({ id, label, required }) => (
                        <div key={id} className="w-full">
                            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                                {label} {required && <span className="text-red-700">*</span>}
                            </label>
                            <input
                                type="file"
                                id={id}
                                name={id}
                                accept="image/*"
                                onChange={handleFileChange}
                                required={required}
                                className="mt-1 w-full border rounded-md shadow-sm p-2"
                            />
                        </div>
                    ))}
                </div>

                {/* Availability */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 md:mb-0">
                        Availability Status <span className="text-red-700">*</span>
                    </label>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 border-2 border-green-600 p-4 w-full">

                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                            {['exchange', 'not-available', 'sell'].map((status) => (
                                <label key={status} className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="availabilityStatus"
                                        value={status}
                                        checked={formData.availabilityStatus === status}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2 capitalize">{status.replace('-', ' ')}</span>
                                </label>
                            ))}

                            {formData.availabilityStatus === 'sell' && (
                                <div className="flex items-center gap-2 rounded-md p-2">
                                    <label htmlFor="price" className="text-sm font-medium text-gray-700">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        min="0"
                                        className="border border-gray-300 rounded-md shadow-sm p-2 w-24"
                                        value={formData.price || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                </div>


                {/* Buttons */}
                <div className="flex items-center border-t pt-4  ">
                    <ButtonComponent
                        type="submit"
                        text="Publish"
                        className="bg-green-500 text-white flex items-center gap-2 rounded-sm hover:bg-green-700 transition duration-200"
                        icon={<FaShare />}
                        onClick={() => null}
                    />
                    <ButtonComponent
                        type="submit"
                        text="Save as Draft"
                        className="bg-green-500 text-white flex items-center gap-2 rounded-sm hover:bg-green-700 transition duration-200"
                        icon={<FaDraft2Digital />}
                        onClick={() => null}
                    />
                </div>
            </form>

            {isLoadingBook && <MiniLoadingSpinner />}
            {isNotification && <ToastContainer />}
        </div>
    );
};
