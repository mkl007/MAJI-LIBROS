import React, { useState } from 'react';
import { genres } from '../utils/contsToExport.util';

export interface BookFormProps {
    onSubmit: (data: BookFormData) => void;
}

export interface BookFormData {
    title: string;
    author: string;
    description?: string;
    publicationYear?: number;
    genre: string;
    coverImage: File | null;
    backCoverImage: File | null;
    availability: 'exchange' | 'sell' | 'both';
    price?: number;
    descriptionFile?: string | null;
    uploadDescriptionAsPdf: File | null;
}


export const AddNewBookForm: React.FC<BookFormProps> = () => {
    // const () = 
    const [formData, setFormData] = useState<BookFormData>({
        title: '',
        author: '',
        description: '',
        publicationYear: undefined,
        genre: '',
        coverImage: null,
        backCoverImage: null,
        availability: 'both',
        price: undefined,
        descriptionFile: null,
        uploadDescriptionAsPdf: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // onSubmitBookForm(formData);
        console.log(formData)
    };

    return (
        <div className="container mx-auto p-4">
            <form className="bg-slate-300 shadow-md rounded p-6" onSubmit={handleSubmit}>
                <div className="flex mb-4">
                    <div className="w-full md:w-1/2 pr-2">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Book Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder='   Title'
                        />
                    </div>
                    <div className="w-full md:w-1/2 pl-2">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            placeholder='   Author (i.e: if I am the author enter my name)'
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
                        disabled={formData.uploadDescriptionAsPdf}
                        placeholder='Description'
                    />
                </div>

                <div className="flex mb-4">
                    <div className="w-full md:w-1/2 pr-2">
                        <label htmlFor="uploadDescriptionAsPdf" className="block text-sm font-medium text-gray-700">Upload Content as PDF</label>
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
                        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
                        <select
                            id="genre"
                            name="genre"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            value={formData.genre}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a genre</option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex mb-4">
                    <div className="w-full md:w-1/2 pr-2">
                        <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">Cover Image</label>
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
                    <label className="block text-sm font-medium text-gray-700">Availability Status</label>
                    <div className="mt-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="availability"
                                value="exchange"
                                className="form-radio"
                                checked={formData.availability === 'exchange'}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Exchange</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                type="radio"
                                name="availability"
                                value="sell"
                                className="form-radio"
                                checked={formData.availability === 'sell'}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Sell</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                type="radio"
                                name="availability"
                                value="both"
                                className="form-radio"
                                checked={formData.availability === 'both'}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Both options</span>
                        </label>
                        {(formData.availability === 'sell' || formData.availability === 'both') && (
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
    );
};

